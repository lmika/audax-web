+++
title = "Customising Dynamo-Browse"
weight = 50
+++

Some aspects of dynamo-browse, such as the key bindings, can be customised.  This is done by
executing commands, which will only be apply for the duration of the session (these are currently not
tracked within the workspace file).  So in order to maintain this customisation across launches, these commands
can be added in an RC file.

## The RC File

The RC file is a text file containing commands that will be launched by Dynamo-Browse upon startup.
By default, the RC file is located at the following path:

```
$HOME/.config/audax/dynamo-browse/init.rc
```

This file is primarily intended for commands that customise dynamo-browse in a particular way, but any
command can be entered here.  If this file is found, Dynamo-Browse will invoke each command before showing
...

## Rebinding Keys

The default key bindings of Dynamo-Browse can be changed using the [rebind]() command.  This takes
a binding name — which corresponds to a particular action invoked by pressing a key — and the key
to which it should be mapped to.

Putting these commands in the RC file will effectively change the default bindings of these key actions.

```
# Rebind T to prompt for a table
rebind "view.prompt-for-table" "T"

# Rebind escape to prompt for a command
rebind "view.prompt-for-command" "esc"
```

At the moment each binding name can only be mapped to a single key.  Also, it's currently not possible
to setup bindings for commands.  These may be supported in the future.

A list of available binding names can be found the the [reference]() (click the checkbox to reveal the
binding names).  Note that some bindings may not actually be bound to keys by default. 