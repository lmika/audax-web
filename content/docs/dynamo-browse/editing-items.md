+++
title = "Editing Items"
weight = 40
+++

_dynamo-browse_ offers some basic facilities for editing items within a DynamoDB table,
such as creating or deleting items, and modifying the attribute values.

## Marking Items

Items can be modified and deleted in bulk by marking them.  A marked item is indicated by a grey
background and a bullet indicator (`•`) on the left side of the table.

To mark or unmark the selected item, press <kbd>m</kbd>.

## Modifying Attributes

Item attributes can be added or modified by using the command `set-attr` or the alias `sa`.
This command will modify the value, and also the type, of an attribute of the currently selected items,
or if there are marked items, all the currently marked items.  

The format of the command is as follows:

```
:set-attr [<type>] <attributeName>
```

Where type is one of the following (case insensitive):

- `-S`: string
- `-N`: number
- `-BOOL`: boolean
- `-NULL`: null

If the type is not specified, and the attribute exists, then the attribute type will not change.
The type must be specified if this is a new attribute or multiple items have been marked.
After executing the command, _dynamo-browse_ will prompt for the value of the new attribute if one is
required.

Modified attributes will only be tracked in memory: they will not be written
to the actual table until it is "putted" (see [Committing Changes](#committing-changes)).
An item that has been modified will be displayed in read and a modified indicator (`M`) will appear
on the left side of the table.

## Deleting Attributes

An attribute can be deleted by using the command `del-attr` or the alias `da`.  The format of the command
is as follows:

```
:del-attr <attributeName>
```

When executed, the attribute with the name _attributeName_ will be deleted from the selected item, or
if there are any marked items, from every marked item.

Deleted attributes will only be tracked in memory: they will not be removed from
the actual table until it is "putted" (see [Committing Changes](#committing-changes)).
An item that has been modified will be displayed in read and a modified indicator (`M`) will appear
on the left side of the table.

## Adding Items

A new item can be created by typing in the command `new-item`.  When entered, _dynamo-browse_
will prompt for the partition and sort key.  Once these are entered, the item will appear
in the item table in green with an asterisk indicator (`*`) on the left side of the table.

A new item will only appear in memory: it will not be written
to the actual table until it is "putted" (see [Committing Changes](#committing-changes)).

## Deleting Items

Items that have been marked can be deleted using the `delete` command.

Unlike most of the other modified commands, running `delete` WILL make changes to the table
immediately.

## Committing Changes

New or modified items (but not deleted items) will be kept in memory until they are committed
or "putted" to the table.  To put the changes, use the `put` command or `w` alias.

## Backing Out of Changes

Any modified items can be reverted back to what they are in the actual table by rerunning the
current query.  This can be done by pressing <kbd>R</kbd>. 