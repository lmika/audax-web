---
title: "Scripting"
---
# Scripting

New commands or key bindings can be defined by writing scripts.

## Scripting Basics

Dynamo-Browse scripts are written using the [Tamarin](https://cloudcmds.github.io/tamarin/) scripting language,
which looks a lot like [Go](https://go.dev).  All features of the language are available in Dynamo-Browse.

The typical "hello world" script for Dynamo-Browse is below:

```
ui.print("Hello, world")
```

This uses the `ui` package, which provides operations for interacting with the Dynamo-Browse user interface.

To execute this script, use the `run-script` command:

```
run-script /path/to/script/hello.tm
```

You'll see that the message "Hello, world" will appear in the status bar of Dynamo-Browse:

XXX




## Extension Scripts

Extension scripts are scripts designed to extend Dynamo-Browse in some way, such as with new commands or key bindings.
They are traditionally loaded on startup and exists in the predefined "script" directory. They are usually designed more
for operations that would be used often over an extended period of time.

### A Traditional Extension Script



### Loading Extension Scripts

To load an extension script, use the `load-script` command:

```
load-script script.tm
```

The script must exist in the "script" directory, which by default is:

```
$HOME/.config/audax/dynamo-browse/scripts
```
