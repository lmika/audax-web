+++
title = "Version 0.0.3 Released"
date = "2022-09-04T9:41:00+10:00"
+++
Version 0.0.3 of the Audax Toolset has been released, and is now available for download.
This release contains the following new features for Dynamo-Browse:

## Back-stack And Workspaces

Switching to a new table, changing the filter, or running a query will now preserve the previous
view in a back-stack, similar to how a web browser tracks which webpages you've visited.
Pressing <kbd>Backspace</kbd> will go back to the previously viewed table, filter or query settings.
Note that the items of the result set are currently not tracked: going back to any previous 
queries or filters will actually rerun them over the actual table.  Press <kbd>\\</kbd> will bring
you forward.

The back-stack is maintained in a workspace, which is a file that tracks any session information.
By default, the workspace file is created in the temporary directory, but the new `-w` launch
flag can now be used to specify which workspace file to use.  When launching Dynamo-Browse with
an already existing workspace, the back-stack will be restored and Dynamo-Browse will be launched
with the previously viewed table, filter and query settings.  This is useful if you need to preserve
context for any particular long-running analysis work you need to do over a DynamoDB table.

## Adjusting The Item Viewport

Sometimes the middle pane displaying the fields of the currently selected item is a little too small
to display all attributes of the currently selected item.  In this release, it is now possible to change
the size of the item table and item view panes.  Pressing <kbd>w</kbd> now cycles between 5 different
layout configurations:

- The item view taking up 14 rows on the bottom with the table pane taking up the rest of the vertical space (the default)
- The item view and table view taking up half of the available space
- The table view taking up 7 rows on the top with the item view taking up the rest of the vertical space
- The table view hidden
- The item view hidden

Pressing <kbd>W</kbd> will cycle among these layout configurations in the opposite direction.

## Copying Item View to Clipboard

The contents of the item view can be copied to the clipboard by pressing <kbd>c</kbd>.  This will include
all the attributes of the currently selected item, including those cut off due to the size of the item view.
The attribute of multiple items can be copied to the clipboard by marking them first, and pressing <kbd>c</kbd>

## Rebindable Keys

This release adds the `rebind` command, allowing keyboard action to be bounded to different keys.  This is
included alongside an simple method of configuring Dyanmo-Browse by writing a RC File, which is read
on launch.  More information about this can be found in [Customising Dynamo-Browse]().

## Other Changes

- Fixed the display of misleading errors that appear after attempting to set or delete attributes.  Any previous errors
  that were displayed after running these commands are now being properly cleared after successfully executing them
  a second time.
  
  