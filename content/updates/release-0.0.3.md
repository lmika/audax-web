+++
title = "Version 0.0.3 Released"
date = "2022-09-04T9:41:00+10:00"
+++
Version 0.0.3 of the Audax Toolset has been released, and is now available for download.
This release contains the following new features for Dynamo-Browse:

## Back-stack And Workspaces

Switching to a new table, changing the filter, or running a query will now preserve the previous
view in a back-stack, similar to how a web browser tracks which webpages you've visited.
Pressing <kbd>Backspace</kbd> will go back through the back-stack, restoring the view to the 
previously viewed table, filter, or query.  After going backwards, you can go forwards again
by pressing <kbd>\\</kbd>.

See [The Back-stack](/docs/dynamo-browse/getting-around/#the-back-stack) for more information on how this works.

The back-stack is maintained in a workspace, which is a file that tracks any session information.
By default, the workspace file is created in the temporary directory, but the new `-w` launch
flag can now be used to specify which workspace file to use.  When launching Dynamo-Browse with
an existing workspace, the back-stack will be restored and Dynamo-Browse will be launched
with the previously viewed table, filter, and query.  This is useful if you need to preserve
context for any particular long-running analysis over the items of a DynamoDB table.

## Adjusting The Item Viewport

Sometimes the middle pane displaying the fields of the currently selected item can be a little too small,
limiting the number of attributes that can actually be seen.  In this release, it is now possible to change
the size of the item table and item view panes.  There are now 5 different layouts, which can be cycled
through by pressing <kbd>w</kbd>:

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

This release adds the `rebind` command, which can be used to bind keyboard action to different keys.  This command
can be included in an RC file, which is a list of commands that Dyanmo-Browse will execute on launch.
More information about this can be found in [Customising Dynamo-Browse](/docs/dynamo-browse/customising/).

## Small UI Fix

One small UI bug has been fixed.  Previously, any errors that were raised during incorrect usage of `set-attr` or
`del-attr` were not being properly cleared after the command was re-entered and executed successfully.
This has now been fix, so that successfully executing `set-attr` or `del-attr` will clear the previous error.
  
  