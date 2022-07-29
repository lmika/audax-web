+++
title = "Launching and Quitting"
weight = 10
+++

To launch dynamo-browse, run the following command at the terminal:

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

Upon launch, dynamo-browse will present a list of all the tables within the region:

{{< image src="/images/dynamo-browse/table-selection.png" alt="Table selection" position="center" >}}

Select the table to view by pressing <kbd>Enter</kbd>.  Use the following keys to navigate
the items within the list:

- <kbd>&uarr;</kbd>/<kbd>i</kbd>: Move selection up
- <kbd>&darr;</kbd>/<kbd>k</kbd>: Move selection down

Once the table is selected, the table will be scanned and dynamo-browse will be presented in
[View Mode](#view-mode).  Another table can be selected from within view mode using the `:table` command.

dynamo-browse can also be launched directly in view mode by specifying a table using the `-t` flag:

```
dynamo-browse -t user-accounts
```

## Quitting

To quit dynamodb-browse, enter the command `q` by pressing <kbd>:</kbd>, then typing <kbd>q</kbd><kbd>Enter</kbd>.
The keystroke <kbd>Ctrl+C</kbd> can also be used to quit.