# read-entire-stream

[![Download Status](https://img.shields.io/npm/dm/read-entire-stream.svg?style=flat-square)](https://www.npmjs.com/package/read-entire-stream)
[![Sponsor on GitHub](https://img.shields.io/static/v1?label=Sponsor&message=❤&logo=GitHub&link=https://github.com/sponsors/compwright)](https://github.com/sponsors/compwright)

Reads an entire stream's contents into a buffer.

Requires Node.js 16+

## Why

There are other options. Why this one?

A brief survey of NPM packages that more or less do this were:

* Antiquated and unmaintained
* Overly verbose
* Included one or more dependencies of unknown security status
* Do not support ES6

This package has no dependencies and was written with ES6 in mind.

In a mere 7 lines of code, it will take any Node.js [ReadableStream](https://nodejs.org/dist/latest-v18.x/docs/api/stream.html) and return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to a Node.js [Buffer](https://nodejs.org/dist/latest-v18.x/docs/api/buffer.html).

## Installation

With NPM:

    $ npm install --save read-entire-stream

With Yarn:

    $ yarn add read-entire-stream

## Usage

```javascript
import readEntireStream from 'read-entire-stream'

// ...

const buf = await readEntireStream(stream)
```

## Demo

See [bin/echo](bin/echo)

    $ echo "Hello, world" | bin/echo
    Hello, world
    

## License

MIT License
