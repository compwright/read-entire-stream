import { Buffer } from 'buffer';

async function readEntireStream(stream) {
  const chunks = [];
  for await (const chunk of stream)
    chunks.push(chunk);
  return Buffer.concat(chunks);
}

export { readEntireStream as default };
