# Launching And Quitting

To launch Dynamo-Browse, run the following command at the terminal:

```
dynamo-browse
```

This will use your current AWS configuration and region, which can be changed by setting
the relevant `AWS_` environment variables.

To connect to a local instance of DynamoDB, such as one
running in a Docker container, use the `--local` flag.  This takes as the argument the hostname
and endpoint of the local DynamoDB server.  The hostname can be omitted, and will default to `localhost`:

```
dynamo-browse --local :8080
```

## Selecting a Table

Upon launch, Dynamo-Browse will present a list of all the tables within the region:

<figure class="screenshot">
	<img src="/images/dynamo-browse/table-selection.png" alt="Table selection">
</figure>

Select the table to view by pressing <kbd>Enter</kbd>.  Use the following keys to navigate
the items within the list:

- <kbd>&uarr;</kbd>/<kbd>i</kbd>: Move selection up
- <kbd>&darr;</kbd>/<kbd>k</kbd>: Move selection down

Once the table is selected, the table will be scanned and Dynamo-Browse will be presented in
[View Mode](#view-mode).  Another table can be selected from within view mode using the `:table` command.

Dynamo-Browse can also be launched directly in view mode by specifying a table using the `-t` flag:

```
dynamo-browse -t user-accounts
```

## Selecting a Workspace

Dynamo-Browse tracks session state, such as the back-stack, in a workspace file.  By default the workspace
file will be a new file created within the temporary directory, but a specific workspace filename can be
specified by using the `-w` flag:

```
dynamo-browse -w my-workspace.ws
```

If the workspace filename references an existing file, Dynamo-Browse will restore the workspace and use it for the duration of
the session.  If the workspace filename references a non-existing file, Dynamo-Browse will initialise a new workspace
using the specified filename.

Only one running instance of Dynamo-Browse can use a single workspace file at any one time.

## Quitting

To quit dynamodb-browse, enter the command `q` by pressing <kbd>:</kbd>, then typing <kbd>q</kbd> <kbd>Enter</kbd>.
The keystroke <kbd>Ctrl+C</kbd> can also be used to quit.