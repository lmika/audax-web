---
title: "Scripting"
---
# Scripting

Scripts can be used to automate certain tasks with Dynamo-Browse. They can also be used to define
new commands or key bindings.

## Scripting Basics

Dynamo-Browse scripts are written using the [Tamarin](https://cloudcmds.github.io/tamarin/) scripting language,
which looks a lot like [Go](https://go.dev).  All features of the language are available in Dynamo-Browse.

The typical "hello world" script for Dynamo-Browse is below:

```
ui.print("Hello, world")
```

This uses the [ui](/docs/reference/script-api/#module-ui) package, which is the package used to interact with
the Dynamo-Browse user interface.
A full list of supported packages can be found in the [Script API](/docs/reference/script-api/) reference, along
with the builtins and packages supported by Tamarin itself.

{{<hint info>}}
  **Note:** the [ext](/docs/reference/script-api/#module-ext) package is only available to Extension Scripts.
{{</hint>}}

To execute this script, use the `run-script` command:

```
run-script /path/to/script/hello.tm
```

You'll see that the message "Hello, world" will appear in the status bar of Dynamo-Browse.

<!-- TODO: Screenshot -->

Any `print` or `printf` messages will be written to the debug log with the prefix `script <filename>`.  The
debug log is turned off by default, but it can be enabled using the [-debug](/docs/reference/launch-flags/#-debug) flag on launch.

Scripts loaded using the `run-script` command are for ad-hoc automation tasks that are not necessarily designed for
repeated use. These ad-hoc scripts are executed, then immediately unloaded, and are not generally allowed to extend
Dynamo-Browse.  In order to do so, you will need to write an Extension Script.

## Extension Scripts

Extension scripts are scripts designed to extend Dynamo-Browse in some way, such as with new commands or key bindings.
They are traditionally loaded on startup and exist in the predefined "script" directory. They are usually designed for
repeated operations, including those that can be bound to command name or keys.

The following is an example script which will define a "goto" command.  When invoked, the script will prompt the
user for the value of the partition key.  It will then perform a query over the currently viewed table for any rows with
that partition key.  If no error occurred, the results of the query will be shown to the user.

```
// Define a new "goto" command, which can be invoked when the user presses ':' and types in 'goto'
ext.command("goto", func() {
    // Use the information of the current table to get the name of the partition key.
    pkName := session.current_table().keys["partition"]

    // Prompt the user for the value to go to.  The user can press Esc, which will cancel
    // the input and return 'nil'.
    keyVal := ui.prompt(pkName + "? ")
    if keyVal == nil {
        return nil
    }

    // Run a query over the DynamoDB table for any rows with the partition key.  Notice
    // the use of the 'args' option, and the presence of both the name prefix (':key')
    // and value prefix ('$val').
    res := session.query(":key = $val", {
        args: {
            key: pkName,
            val: keyVal,
        },
    })
    
    // The query method will return either an error or a result.  If it's an error, print
    // a notice and exist.
    if res.is_err() {
        ui.print("Can't goto: " + res.err_msg())
        return nil
    }

    // If no error, unwrap the result object to get the result-set returned from the query.
    // Then change the current result-set to this one.  This will change the result-set the
    // user is currently seeing.
    session.set_result_set(res.unwrap())
})
```

To load an extension script, use the `load-script` command:

```
load-script script.tm
```

The script must exist in the "script" directory, which by default is:

```
$HOME/.config/audax/dynamo-browse/scripts
```
