+++
title = "Filtering and Querying"
weight = 30
+++

## Filtering

The displayed items can be filtered down to those that contain a specific substring.
When a filter is set, the items displayed will be reduced to those that contain the substring in any top-level
attribute value.  Note that filtering is case sensitive.

To set the filter, press <kbd>/</kbd>, and enter the substring you wish to filter on.  

To clear the filter, press <kbd>/</kbd>, and press <kbd>Enter</kbd> without entering any value.

Filtering will only consist the items that have been returned in the last scan or query, and will not
make calls to DynamoDB.

## Querying

A query or scan over the table can be made by entering a query expression.
Query expressions are a built-in expression language which translates to either a DynamoDB query
or scan, depending on the operations of the query.

To run a query, press <kbd>?</kbd>, and enter the query expression.

To clear a query, press <kbd>?</kbd>, and press <kbd>Enter</kbd> without entering any value.

<div class="framed">
  Note that the query expression language is still under early development and may change in the future.
  At the moment, all query expressions result in a table scan.
</div>

The types of query expressions that are supported are:

- `attr = "value"`: matches items where attribute _attr_ matches the string _value_
- `attr ^= "value"`: matches items where attribute _attr_ has the prefix _value_