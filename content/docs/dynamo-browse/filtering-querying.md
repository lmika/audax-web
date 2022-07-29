+++
title = "Filtering and Querying"
weight = 30
+++

## Filtering

{{< image src="/images/dynamo-browse/filter-items.png" alt="Items with filter applied" position="center" >}}

The displayed items of the current result-set can be filtered down to those that contain a specific substring.

To set the filter, press <kbd>/</kbd>, and enter the substring you wish to filter on.  

To clear the filter, press <kbd>/</kbd>, and press <kbd>Enter</kbd> without entering any value.

When a filter is set, any item that does not have a top-level attribute containing the substring will be hidden.

Filtering will only consist the items that are in the current result-set.  It will not result in a call to the actual
table itself.

Note that filtering is case sensitive.

## Querying

{{< image src="/images/dynamo-browse/query-items.png" alt="Items with query applied" position="center" >}}

A query or scan over the table can be made by entering a query expression.
Query expressions are a built-in expression language which translates to either a DynamoDB query
or scan, depending on the expression.

To run a query, press <kbd>?</kbd>, and enter the query expression.

To clear a query, press <kbd>?</kbd>, and press <kbd>Enter</kbd> without entering any value.

<div class="framed">
  Note that the query expression language is still under early development and may change in the future.
  At the moment, all query expressions result in a table scan.
</div>

The types of query expressions that are supported are:

- `attr = "value"`: matches items where attribute _attr_ matches the string _value_
- `attr ^= "value"`: matches items where attribute _attr_ has the prefix _value_