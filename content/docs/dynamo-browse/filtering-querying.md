+++
title = "Querying And Viewing Results"
weight = 30
+++

## Querying

{{< image src="/images/dynamo-browse/query-items.png" alt="Items with query applied" position="center" >}}

A query or scan over the table can be made by entering a query expression.
Query expressions are a built-in expression language which translates to either a DynamoDB query
or scan, depending on the expression.

To run a query, press <kbd>?</kbd>, and enter the query expression.

To clear a query, press <kbd>?</kbd>, and press <kbd>Enter</kbd> without entering any value.

While the query is running, a progress indicator will spin in the status bar, indicating activity.  A
query can be cancelled while this progress indicator is visible by pressing <kbd>^C</kbd>.

<div class="framed">
  Note that the query expression language is still under early development and may change in the future.
</div>

The types of query expressions that are supported are:

- `attr = "value"`: matches items where attribute _attr_ matches the string _value_
- `attr ^= "value"`: matches items where attribute _attr_ has the prefix _value_

## Filtering

{{< image src="/images/dynamo-browse/filter-items.png" alt="Items with filter applied" position="center" >}}

The displayed items of the current result-set can be filtered down to those that contain a specific substring.

To set the filter, press <kbd>/</kbd>, and enter the substring you wish to filter on.  

To clear the filter, press <kbd>/</kbd>, and press <kbd>Enter</kbd> without entering any value.

When a filter is set, any item that does not have a top-level attribute containing the substring will be hidden.

Filtering will only consist the items that are in the current result-set.  It will not result in a call to the actual
table itself.

Note that filtering is case sensitive.

## Adjusting The Columns

The columns of the result-set can be adjusted by opening up the _Fields Popup_.  This popup can be opened by pressing <kbd>f</kbd>.

XXX - Screenshot

While this popup is opened, the following changes can be applied to the displayed columns of the main table:

- Columns can be hidden
- The order columns appear in the main table can be rearranged 
- New columns can be added

The popup will display the list of columns of the main result-set table.  Pressing <kbd>&uarr;</kbd>/<kbd>i</kbd>
or <kbd>&darr;</kbd>/<kbd>k</kbd> will move the selection indicator to the column to apply the operation.  Pressing
<kbd>&larr;</kbd>/<kbd>j</kbd> or <kbd>&rarr;</kbd>/<kbd>l</kbd> will scroll the main table left or right so that the
operation can be previewed.

To reset the columns to the top-level fields of the current result set, press <kbd>&#8679; R</kbd>.

To close the popup, press <kbd>Escape</kbd>.

### Showing And Hiding Columns

In the Fields Popup, each row has a symbol indicating whether the row is currently visible (`X`) or hidden (`x`).  Pressing
<kbd>Space</kbd> will toggle whether the currently selected column is shown or hidden.

### Re-arranging The Order Of Columns

The currently selected row can be moved up or down the table.  This will move the corresponding column in the main table either
left or right.

Press <kbd>&#8679; I</kbd> to the selected row up, which will move the corresponding column left.

Press <kbd>&#8679; K</kbd> to the selected row down, which will move the corresponding column right.

### Adding And Removing Columns

New columns can be added in the table.  The value of these columns will be determined by the result of a query expression,
and can be used to expose fields that are not at the top level.

Any nested fields of maps or lists will not be included as a column by default.  Consider, for example, a table of books
with authors structured as so:

```
{
  "book": {"S": "The Lord Of The Rings"},
  "author": {"M": {
    "firstName": {"S": "John"},
    "middleName": {"S": "Ronald Reuel"},
    "lastName": {"S": "Tolkien"},
  }}
}
```

If you wanted to show the the author's first and last name in the main table, rather than just see the value `(3 items)`, you
could add a new column with an expression selecting the fields of the author map.  The expressions that can be used here
are as follows:

- First name: `author.firstName`
- Last name: `author.lastName` 

This can be extended to expressions that evaluate to a value.  For example, the expression `author.firstName ^= "J"` can be
use in a new column.  If the first name begins with a J, the column value will be "True".

To add a new column, press <kbd>a</kbd> while the Fields Popup is visible.  You'll be prompted to enter a query expression,
which will be evaluated over each row within the result-set when displaying the table.

Any column, that was either retrieved from the result-set or added by the user, can be deleted by selecting the column
within the Fields Popup and pressing <kbd>d</kbd>. 