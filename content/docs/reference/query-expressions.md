# Query Expression

Query expression is used to execute queries and scans over items in the DynamoDB table.
Such expressions can also be used in other areas of Dynamo-Browse, such as populating the
value of new columns.

{{< hint warning >}}
  Note that the query expression language is still under early development and may change in the future.
{{< /hint >}}

The expression is represented in EBNF form:

```
string              = '"' .* '"';

identifier          = [a-zA-Z_][a-zA-Z0-9_]*;

literal             = string;

field               = identifier ("." identifier)*;

binary_operation    = field ( "=" | "^=" ) literal;

expression          = field
                    | binary_operation
                    | expr ( "and" | "or" ) expr
                    ;
```

The order of operations, from lowest priority to highest priority are as follows:

| Operation      | Symbol       |
|:---------------|:-------------|
| Disjunction    | `or`         |
| Conjunction    | `and`        |
| Equality       | `=`, `^=`    |

The types of binary operations that are supported are:

- `attr = "value"`: matches items where attribute _attr_ matches the string _value_
- `attr ^= "value"`: matches items where attribute _attr_ has the prefix _value_