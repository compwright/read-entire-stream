#!/usr/bin/env node

import process from 'process'
import readEntireStream from '../src/index.js'

async function main(stream) {
    try {
        const buf = await readEntireStream(stream)
        console.log(buf.toString())
    } catch (e) {
        console.error(e)
    }
}

// read from piped input
main(process.stdin)
