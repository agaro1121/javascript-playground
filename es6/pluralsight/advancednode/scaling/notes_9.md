# Notes

Different approaches to scaling:
- cloning - multiple instances
- Decomposing - micro services (loose coupling/high cohesion)
- Splitting - Each split handles a different portion of the data. Horizontal partition/sharding(in databases)
  Requires look-up before sending off work to app instance.
  
# Child Processes
- send commands to OS
- There is a synchronous version of each method below

## Spawn
- launches command in new process
- Does not create a shell to run its commands
- Better because of its streaming nature
- can 'inherit' stdio from it's parents
- can set shell=true to have similar capabilities as `exec` but retains it's streaming nature
## Fork
- variation of spawn
- biggest difference is a 2-way communication channel is created with forked process
## Exec
- creates a shell to run its commands
- buffers command's generated output and sends it in the form of a callback
## ExecFile
- execute a file without running a shell
- behaves just like `exec`
- some things not supported like stdio redirection