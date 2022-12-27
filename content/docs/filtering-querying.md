# Querying And Viewing Results

## Querying

<figure class="screenshot">
	<img src="/images/dynamo-browse/query-items.png" alt="Items with query applied">
</figure>

A query or scan over the table can be performed by entering a _Query Expression_.
Query expressions are a built-in expression language which translates to either a DynamoDB query
or scan, depending on the expression.  Details about the Query Expression language can be found in the
[Query Expressions references](/docs/reference/query-expressions/).

To run a query, press <kbd>?</kbd>, and enter the query expression.

To clear a query, press <kbd>?</kbd>, and press <kbd>Enter</kbd> without entering any value.

While the query is running, a spinner indicating activity will be shown in the status bar.  A running
query can be cancelled while this spinner is visible by pressing <kbd>^C</kbd>.  You have the option
to view any partial results that have been retrieved at the time.

## Filtering

<figure class="screenshot">
	<img src="/images/dynamo-browse/filter-items.png" alt="Items with filter applied">
</figure>

The displayed items of the current result-set can be filtered down to those that contain a specific substring.

To set the filter, press <kbd>/</kbd>, and enter the substring you wish to filter on.  

To clear the filter, press <kbd>/</kbd>, and press <kbd>Enter</kbd> without entering any value.

When a filter is set, any item that does not have a top-level attribute containing the substring will be hidden.

Filtering will only consist the items that are in the current result-set.  It will not result in a call to the actual
table itself.

Note that filtering is case sensitive.
