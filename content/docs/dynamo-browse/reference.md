+++
title = "Reference"
weight = 100
+++

# Key Bindings

<div data-controller="keybindings">

<label>
	<input type="checkbox" id="show-kb-binding-names" 
    data-keybindings-target="showBindingNames" data-action="keybindings#bindingNamesChanged"> Show binding names
</label>

<table class="key-bindings" data-keybindings-target="keyBindingTable">
<thead>
<tr>
  <th class="kb-key-binding" style="text-align:left">Key</th>
  <th class="kb-binding-name" style="text-align:left">Binding Name</th>
  <th style="text-align:left">Action</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="kb-key-binding"><kbd>&uarr;</kbd>/<kbd>i</kbd></td>
  <td class="kb-binding-name">table.move-up</td>
  <td>Move selection up</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>&darr;</kbd>/<kbd>k</kbd></td>
  <td class="kb-binding-name">table.move-down</td>
  <td>Move selection down</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>PgUp</kbd>/<kbd>&#8679;I</kbd></td>
  <td class="kb-binding-name">table.page-up</td>
  <td>Page up</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>PgDn</kbd>/<kbd>&#8679;K</kbd></td>
  <td class="kb-binding-name">table.page-down</td>
  <td>Page down</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>Home</kbd>/<kbd>0</kbd></td>
  <td class="kb-binding-name">table.goto-top</td>
  <td>Move selection to first item</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>End</kbd>/<kbd>$</kbd></td>
  <td class="kb-binding-name">table.goto-bottom</td>
  <td>Move selection to last item</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>&larr;</kbd>/<kbd>j</kbd></td>
  <td class="kb-binding-name">table.move-left</td>
  <td>Shift displayed columns left</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>&rarr;</kbd>/<kbd>l</kbd></td>
  <td class="kb-binding-name">table.move-right</td>
  <td>Shift displayed columns right</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>Backspace</kbd></td>
  <td class="kb-binding-name">view.view-back</td>
  <td>Go back</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>\</kbd></td>
  <td class="kb-binding-name">view.view-forward</td>
  <td>Go forward</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>w</kbd></td>
  <td class="kb-binding-name">view.cycle-layout-forward</td>
  <td>Cycle forward through layout</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>&#8679;W</kbd></td>
  <td class="kb-binding-name">view.cycle-layout-backwards</td>
  <td>Cycle backwards through layout</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>m</kbd></td>
  <td class="kb-binding-name">view.mark</td>
  <td>Mark/unmark currently selected item</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>c</kbd></td>
  <td class="kb-binding-name">view.copy-item-to-clipboard</td>
  <td>Copy displayed item to pasteboard</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>/</kbd></td>
  <td class="kb-binding-name">view.prompt-for-filter</td>
  <td>Filter</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>?</kbd></td>
  <td class="kb-binding-name">view.prompt-for-query</td>
  <td>Run scan/query</td>
</tr>
<tr class="kb-binding-name">
  <td class="kb-key-binding"></td>
  <td class="kb-binding-name">view.prompt-for-table</td>
  <td>Select table</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>R</kbd></td>
  <td class="kb-binding-name">view.rescan</td>
  <td>Rerun last scan/query</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>:</kbd></td>
  <td class="kb-binding-name">view.prompt-for-command</td>
  <td>Enter command</td>
</tr>
<tr>
  <td class="kb-key-binding"><kbd>^C</kbd>/<kbd>Esc</kbd></td>
  <td class="kb-binding-name">view.quit</td>
  <td>Quit</td>
</tr></tbody>
</table>

</div>

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

### echo

```
:echo [message ...]
```

Displays _message_ in the status bar.  Mainly used for debugging.

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

Quits Dynamo-Browse.

### rebind

```
:rebind <bindingName> <key>
```

Rebinds the action with _bindingName_ to _key_.  This will replace any existing binding for that action.
See [Key Bindings](#key-bindings) with "Show binding names" checked to see available binding names.

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
