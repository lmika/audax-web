# Query Expression

Query expressions are used to select rows of a table.  When executed as a query (i.e. by pressing <kbd>?</kbd>),
they will be translated into query or table scans that will run over the DynamoDB table in AWS.
They work similar to the "where" clause in PartiQL except that they only require Query and Scan permission
on the AWS table and do not require "select" clauses.
Such expressions can also be used in other areas of Dynamo-Browse, such as populating the value of new columns.

## Names And Values

A query expressions support the following literals:

- Strings: `"Hello"`
- Integers: `123`
- Boolean: `true` or `false`

Field names are represented as regular identifiers, such as `pk` or `address`.

## Equality

To select rows with a field that equals a given value, use the `=` operator:

```
pk = "something"
```

Either operand will can be an identifier, placeholder, or value that resolves to any type.
The result will be true if both the LHS and RHS equal the same type and value. If the types differ or
the values differ, the result will be false. The field types can be different, but will always produce false.

The compliment is the `!=` operator:

```
pk != "not this"
```

## Numerical Comparison

The operands `<`, `<=`, `>`, `>=` can be used to compare numerical fields and values:

```
three < 5     // true
three <= 3    // true
three > 12    // false
three >= 1    // true
```

To verify that a number exists within a range, use the `between` operand:

```
three between 1 and 5   // true
```

## Prefix Operator

To select rows with a field that starts with a given substring, use the `^=` operator:

```
pk ^= "some"
```

This is equivalent to using the [begins_with](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html) function in AWS query expressions.

## Logical Operators

The logical operators `and`, `or` and `not` can be used to express conjunctions, disjunctions and logical negation
between multiple expressions:

```
pk = "this" and sk = "that"
pk != "that" and count > 123
not count = 21
```

The order of precedence of these operators, from lowest to highest, is `or`, `and`, then `not`. This differs
from AWS, in which all operators have the same precedence. For example, the query:

```
pk="this" or pk="that" and sk="foo"
```

is equivalent to:

```
pk="this" or (pk="that" and sk="foo")
```

The order can be overridden using brackets:

```
(pk="this" or pk="that") and sk="foo"
```
{{< hint info >}}
If a query expression is of the form `pk = <val>` or `pk = <val> and sk <op> <val>`,
where:

- _pk_ and _sk_ are the partition and sort keys of the base table or a GSI,
- _val_ resolves to a constant value, and,
- _op_ is either `=`, `^=`, `<`, `<=`, `>`, `>=`, or `between`

the expression will be executed as a Query call. Unlike expressions on the AWS Query API method itself,
the order of the `pk` and `sk` subexpressions can be swapped.

Other expressions are supported but they will be executed as a table Scan.
{{< /hint >}}

## The `in` Operator

The `in` operator can be used to determine if a value exists in a collection:

```
three in (1, 2, 3, 4, 5)

name in ("Tom", "Dick", "Harry")
```

The result will be a boolean, which will be true if the value of the LHS equals any of the items within the RHS.

The collection can be one or more fixed set of values within parenthesis separated by commas. A single
value present within parenthesis is equivalent to the equality test:

```
three in (3)   // equivalent to: three = 3
```

The right hand side can also be a subexpression without parenthesis that will resolve to either a string,
list or map. The operand will behave differently based on the RHS type:

- If the RHS is a string, the result will be true if the LHS is a substring of the RHS (equivalent to the `contains` AWS conditional expressions function)
- If the RHS is a list, the result will be true if the LHS equals any of the items of the list
- If the RHS is a map, the result will be true if the LHS appears as a key of the map

The compliment operand is `not in`:

```
three not in (6, 7, 8, 9)
```

## The `is` Operator

The `is` operator can be used to assert the value type.  The RHS operand is a string which is to represent an AWS
DynamoDB item attribute type, for example `S` for strings, `N` for numbers, etc.

```
"hello" is "S"    // true
123 is "N"        // true
"hello" is "N"    // false
```

This is equivalent to the `attribute_type` AWS conditional expressions function.

The special value `any` can be used to check that a field is set, regardless of type:

```
pk is "any"  // true
```

This is equivalent to the `attribute_exists` AWS conditional expressions function.

The compliment operand is `not is`.  Using it with the "any" special value (`not is "any"`) is equivalent to the
`attribute_not_exists` AWS conditional expressions function.

## The `using` Options

A query that is to be executed on the actual table in AWS will go though a short planning phase to determine
whether it's possible to invoke the expression as a `Query` call. If the attributes map to partition and sort keys
of either the main table, or exactly one GSI associated with the table, the expression will be executed as a Query
over the table or the GSI found with those attributes.

In cases where multiple GSI candidates exist on the base table, the query will fail with the following error:

```
multiple plans with index found. Specify index or scan with 'using' clause
```

In these cases, the index will need to be specified with the `using` keyword with the `index` option:

```
address="something" using index("specific-gsi-name")
```

The `using` keyword can also be used to force the expression to run as a table scan,
even if the query can be invoked using a Query call over the base table or GSI:

```
address="something" using scan
```

## Builtin Functions

Query expressions support a number of builtin functions.

### The `marked` function

```
marked(fieldname)
```

The `marked` function will return a list of field values of all marked rows of the current result set. The
items will appear in the list as they appear in the result set. The _fieldname_ currently only supports top-level fields.
If no fields are marked, the empty list is returned.

```
marked("city")
```

### The `range` function

```
range(from, to)
```

The `range` function will return a list of integers between _from_ and _to_ inclusive.  Non integers will be truncated
to integers, and the step is always be 1.

```
range(2, 5)            // [2, 3, 4, 5]
three in range(2, 5)   // true
```

### The `size` function

```
size(v)
```

The `size` function will return the number of items of a list or map, or the length of a string.

{{< hint info >}}
The `size` function is equivalent to the `size` AWS conditional expressions function, and as such is the
only function that is included as is in the generated Query or Scan expression.  All other functions are evaluated
prior to making the Query or Scan AWS call.
{{</hint>}}


## Placeholders

In some circumstances, such as the [session.query](/docs/reference/script-api/#session-query) method, it's possible to use a placeholder as a field or value. To expand a placeholder to an identifier, use the `:` prefix. To expanded the placeholder as a value, use the `$` prefix. For example, the expression `:key = $value` in the following script:

```
out := session.query(":key = $value", {
  table: "some-table",
  args: {
    key: "pk",
    value: "value"
  }
}
```

Is equivalent to the query `pk = "hello"`, as the placeholder `:key` is expanded to an identifier and `$value` is expanded
to a value, in this case a string.
