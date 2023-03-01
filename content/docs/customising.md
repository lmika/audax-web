# Customising Dynamo-Browse

Some commands can be used to customise Dynamo-Browse, such as modify key bindings.
The effect of these commands will only be applied for the duration of the session: they are currently not
tracked within the workspace file.  So in order to keep customisations across relaunches, these commands
can be added to an RC file.

## The RC File

The RC file is a text file containing commands that will be executed by Dynamo-Browse upon launch.
By default, the RC file is located at the following path:

```
$HOME/.config/audax/dynamo-browse/init.rc
```

This file is primarily intended for commands that customise Dynamo-Browse in a particular way, but any
command can be entered here.  If this file is found, Dynamo-Browse will invoke each command before loading
or prompting the table.

## Rebinding Keys

The default key bindings of Dynamo-Browse can be changed using the [rebind](/docs/reference/commands#rebind) command.  This takes
a binding name corresponding to the particular action to invoke, and the key
to which it should be mapped to.

Putting these commands in the RC file will effectively change the default bindings of Dynamo-Browse.

```
# Rebind T to prompt for a table
rebind "view.prompt-for-table" "T"

# Rebind escape to prompt for a command
rebind "view.prompt-for-command" "esc"
```

At the moment each binding name can only be mapped to a single key.  It's also currently not possible
to setup bindings for commands.  These may be supported in the future.

A list of available binding names can be found the the [reference](/docs/reference/key-bindings)
(check the "Show binding names" checkbox).  Note that some bindings may not have default key bindings.