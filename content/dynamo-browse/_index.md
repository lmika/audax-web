+++
title = "dynamo-browse"
+++
# dynamo-browse

dynamo-browse is a terminal-based UI (TUI) app for working with DynamoDB tables.
With it, you can quickly connect to and browse the contents of a DynamoDB table
in your AWS account or local Docker container.  There are some basic tools for
editing as well.

XXX

## Installing


## Running

To launch dynamo-browse, run the following command at the terminal:

```
$ dynamo-browse
```

This will use your current AWS configuration and region.

In order to launch dynamo-browse to connect to a local instance of AWS, such as one
running in a Docker container, run the command with the `-local` flag set to the local
endpoint (if localhost is used, only the port is required):

```
$ dynamo-browse -local :8080
```

### Selecting Table

Upon launch, dynamo-browse will request a description of the tables within the account
and present them as a list:

XXX 

Select the table to view by pressing <kbd>Enter</kbd>.  Use the following commands to navigate
the items within the list:

- <kbd>Up</kbd>/<kbd>i</kbd>: Move selection up
- <kbd>Down</kbd>/<kbd>k</kbd>: Move selection down

Once the table is selected, the table will be scanned and dynamo-browse will be presented in
[View Mode](#view-mode).
dynamo-browse can also be launched with a specific table preselected using the `-t` flag.

## View Mode

XXX

## Reference

The following are references for using 

### Commands

#### q - Quit

Quits the application.

### Key Mapping