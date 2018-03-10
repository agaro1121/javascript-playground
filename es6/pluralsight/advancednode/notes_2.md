# V8 Options
`node --v8-options | grep "in progress"` # in-progress features
`node --use_strict` #enforce strict mode
`node --v8-options | grep gc`
`node --expose-gc -e "gc()"` #will trigger gc..but pauses everything else in your app
- Flags can be set at runtime
  - Acquire v8 object
```bash
javascript-playground (master *+) > node
> v8
{ cachedDataVersionTag: [Function: cachedDataVersionTag],
  getHeapStatistics: [Function: getHeapStatistics],
  getHeapSpaceStatistics: [Function: getHeapSpaceStatistics],
  setFlagsFromString: [Function: setFlagsFromString],
  Serializer: [Function: Serializer],
  Deserializer: [Function: Deserializer],
  DefaultSerializer: [Function: DefaultSerializer],
  DefaultDeserializer: [Function: DefaultDeserializer],
  deserialize: [Function: deserialize],
  serialize: [Function: serialize] }

> v8.getHeapStatistics()
{ total_heap_size: 7684096,
  total_heap_size_executable: 3670016,
  total_physical_size: 6001480,
  total_available_size: 1492536552,
  used_heap_size: 5546624,
  heap_size_limit: 1501560832,
  malloced_memory: 8192,
  peak_malloced_memory: 1185848,
  does_zap_garbage: 0 }
> 
```

# REPL
- use `_` to get last computed value
- `.editor` like scala `:paste`
- can be brought in via require `const repl = require('repl);` --create custom repls
```javascript
const repl = require('repl');

let r = repl.start({
    ignoreUndefined: true,
    replMode: repl.REPL_MODE_STRICT
});

r.context.loadash = require('lodash'); //pre-load common libs
```

# Node Flags
- `-c` - check syntax
- `-p` - evaluate node string ad-hoc
- `-r` - pre-load module

# Node args
- `node -p "process.argv.slice(1)" test 42`
- First arg is node command itself
```bash
javascript-playground (master *+) > node -p "process.argv.slice(1)" test 42
[ 'test', '42' ]
javascript-playground (master *+) > node -p "process.argv.slice(0)" test 42
[ '/Users/hierro/.nvm/versions/node/v9.0.0/bin/node',
  'test',
  '42' ]
```
- all flags treated as strings

# Global Object
- `process` - is an Event Emitter
- `process.env` -- COPY of environment vars - basically, never rely on this
- never register an event handler on 'uncaughtException'

## Buffer
- works with Binary streams of data
- memory is allocated outside the V8 engine
- Data inside buffer has no encoding. Needs to be specified on READ otherwise you get back a 'Buffer' object
```bash
> const string = 'touché'
> const buffer = Buffer.from('touché')
> console.log(string, string.length);
touché 6
> console.log(buffer, buffer.length);
<Buffer 74 6f 75 63 68 c3 a9> 7
# Shows length of 7 because the 'é' is represented as it's internal UTF-8 representation
# the 7 is actually the number of bytes not characters
```
- Buffers cannot be resized
- `Buffer.alloc(8)` --fills empty spaces
- `Buffer.allocUnsafe(8)` --Does NOT fill empty spaces
```bash
> Buffer.allocUnsafe(8).toString()
'�@�ͩ?\u0000\u0000'
> Buffer.alloc(8).toString()
'\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000'
> Buffer.allocUnsafe(8).fill().toString()
'\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000'
```
- results of combinators share the same memory as the original Buffer
- use StringDecoder for streams of text. Does a better job of combining incomplete bytes

# Require
- you have access to the module you are in `console.log(module)`
- starts looking for modules from current directory and then up the directory structure
- core node modules have no search scopes. They return right away
- `require.resolve('find-me')` only searches if a module can be found. Does not load it
- `index.js` is default file name under a directory. This can be overridden in package.json
- circular module dependencies allowed - node will try to share partial exports though
- DO NOT use exports object in timers
- searches for file extensions in the following order: `.js`, `.json`, `.node`
```bash
> require.extensions
{ '.js': [Function], '.json': [Function], '.node': [Function] }
```
- require is a function. It can be overridden.
```javascript
require = function() {
    return { mocked: true };
}

const fs = require('fs');
console.log(fs); // { mocked: true } 
```
- can use `require` to check if a file is run as script or required
```javascript
if (require.main == module) {
    // run function
} else {
    // export function
}
```

# NPM
- can install packages directly from github
- `npm --dry-run`
- `npm ls -g --depth=0 --json`
- `npm ll -g --depth=0`
- install flags: `-S` `-D` `-O` `-g`
- npm update
- `npm config list -l` list npm configuration
- change some npm configs: `npm config set init-author-name "Batman"`
- `npm config delete init-author-name`
- `npm config set save true` - make install always use `--save`
- `npm search lint`
- `npm-shrinkwrap` - lock down dependency versions
- `npm home lodash` - takes you to dependency website
- `npm repo lodash`
- `npm prune` - cleans up installed packages not in `package.json`
- easter eggs !