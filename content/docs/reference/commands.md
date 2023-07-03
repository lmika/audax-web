# Commands

## del-attr

```
:del-attr <attribute>
```

Alias: `da`

Deletes _attribute_ from the currently selected item; or if there are any marked items, the marked items.

## delete

```
:delete
```

Deletes the marked items.  Unlike the other commands that modify items, this command will be executed on
the table straight away.

## echo

```
:echo [message ...]
```

Displays _message_ in the status bar.  Mainly used for debugging.

## export

```
:export <filename>
```

Writes the currently loaded items as a CSV file to _filename_.

## mark

```
:mark [all | none | toggle]
```

Mark the rows in the following way:

- `all`: will mark all rows.  This is the default when invoked without an argument.
- `none`: will unmark all rows.
- `toggle`: will toggle all marked and unmarked rows.


## new-item

```
:new-item
```

Creates a new item.  When executed, the value for the partition key and sort key will be prompted.
The new item will not be written to the table until it is committed with the `put` command.

## put

```
:put
```

Alias: `w`

Commits all new and modified items to the table.

## quit

```
:quit
```

Alias: `q`

Quits Dynamo-Browse.

## rebind

```
:rebind <bindingName> <key>
```

Rebinds the action with _bindingName_ to _key_.  This will replace any existing binding for that action.
See [Key Bindings](#key-bindings) with "Show binding names" checked to see available binding names.

## set

```
:set <name> [value]
```

Set the value of a setting.  Flag setting types can be enabled without any value.  See [Settings](#settings) for possible setting values.

## set-attr

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
- `-TO`: value of an expression

If unset, the attribute type will not be changed.  _type_ must be set if multiple items have been marked.

## table

```
:table
```

Select the table to display.

## unmark

```
:unmark
```

Unmark all marked items.  This is essentially an alias for `mark none`.
