'use strict';

const buffer = require('buffer');

async function readEntireStream(stream) {
  const chunks = [];
  for await (const chunk of stream)
    chunks.push(chunk);
  return buffer.Buffer.concat(chunks);
}

module.exports = readEntireStream;
