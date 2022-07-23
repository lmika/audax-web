+++
title = "Getting Around"
weight = 20
+++

After selecting a table, or launching with the `-t` flag, dynamo-browse will perform a scan
of the table and present the results in the default browse mode.

This mode comprises of three panes:

- The top pane displays the items of the current table.  The table name is at the top-left.
- The middle pane displays the attributes of the currently selected item.
- The bottom pane displays the current query or filter, plus any messages.  Prompts for input will
  also appear at the bottom.

The top pane displays the rows of the table, up to 1,000 rows.  The columns of the table
consist of the top-level attributes.  The partition key, sort key, plus any explicitly defined
attributes will always be displayed from the left margin onwards.  The other attributes are determined
from the results of the last scan or query, and may change depending on the result.  The rows
are also sorted in ascending order based on the value and type of the partition and sort key.

The following keys can be used to change the currently selected row, which is highlighted in pink:

- <kbd>&uarr;</kbd>/<kbd>i</kbd>: Move selection up
- <kbd>&darr;</kbd>/<kbd>k</kbd>: Move selection down
- <kbd>PgUp</kbd>/<kbd>&#8679; I</kbd>: Page up
- <kbd>PgDn</kbd>/<kbd>&#8679; K</kbd>: Page down
- <kbd>Home</kbd>/<kbd>0</kbd>: First row
- <kbd>End</kbd>/<kbd>$</kbd>: Last row

The display columns of the table can be scrolled across by using the following keys:

- <kbd>&larr;</kbd>/<kbd>j</kbd>: Scroll visible columns left
- <kbd>&rarr;</kbd>/<kbd>l</kbd>: Scroll visible columns right

The attributes of the currently selected item will appear below.  Both the type and the value of each
attribute will be displayed.  Any nested attributes will be indented, and below their parent item.

## Entering Commands

Pressing <kbd>:</kbd> will bring up the command prompt.