# why
writing something like `const string1 = 'string1'` is very annoying to do, it's a slippery slope before you end up with hundreds of lines that look like this when using redux; by using this enum creator, you just pass in a bunch of string like a normal enum and then it will spit out an "enum" object for you. it's very similar to the typescript enum, but centered around enums having strings equivalent to their name

## usage
```js
const {enums} = require('./enums');

enums(['SOME_ENUM']) // {'SOME_ENUM: 'SOME_ENUM'}
```