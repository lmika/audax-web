+++
title = "Reference"
weight = 100
+++

# Key Bindings

| Key                                  | Action                              |
| :----------------------------------- | :---------------------------------- |
| <kbd>&uarr;</kbd>/<kbd>i</kbd>       | Move selection up                   |
| <kbd>&darr;</kbd>/<kbd>k</kbd>       | Move selection down                 |
| <kbd>PgUp</kbd>/<kbd>&#8679;I</kbd> | Page up                             |
| <kbd>PgDn</kbd>/<kbd>&#8679;K</kbd> | Page down                           |
| <kbd>Home</kbd>/<kbd>0</kbd>         | Move selection to first item        |
| <kbd>End</kbd>/<kbd>$</kbd>          | Move selection to last item         |
| <kbd>&larr;</kbd>/<kbd>j</kbd>       | Shift displayed columns left        |
| <kbd>&rarr;</kbd>/<kbd>l</kbd>       | Shift displayed columns right       |
| <kbd>m</kbd>                         | Mark/unmark currently selected item |
| <kbd>/</kbd>                         | Filter                              |
| <kbd>?</kbd>                         | Run scan/query                      |
| <kbd>R</kbd>                         | Rerun last scan/query               |
| <kbd>:</kbd>                         | Enter command                       |
| <kbd>^C</kbd>/<kbd>Esc</kbd>        | Quit                                |

## Commands

### del-attr

```
:del-attr <attribute>
```

Alias: `da`

Deletes _attribute_ from the currently selected item; or if there are any marked items, the marked items.

### delete

```
:delete
```

Deletes the marked items.  Unlike the other commands that modify items, this command will be executed on
the table straight away.

### export

```
:export <filename>
```

Writes the currently loaded items as a CSV file to _filename_.

### new-item

```
:new-item
```

Creates a new item.  When executed, the value for the partition key and sort key will be prompted.
The new item will not be written to the table until it is committed with the `put` command.

### put

```
:put
```

Alias: `w`

Commits all new and modified items to the table.

### quit

```
:quit
```

Alias: `q`

Quits dynamo-browse.

### set-attr

```
:set-attr [type] <attributeName>
```

Alias: `sa`

Modifies the value of _attribute_ of the currently selected item; or if there are any marked items, the marked items.

The value of _type_ can be use to specify the type of the attribute.  It can be one of the following (case insensitive):

- `-S`: string value
- `-N`: number value
- `-BOOL`: boolean value
- `-NULL`: null value

If unset, the attribute type will not be changed.  _type_ must be set if multiple items have been marked.

### table

```
:table
```

Select the table to display.

### unmark

```
:unmark
```

Unmark all marked items.