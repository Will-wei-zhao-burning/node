#!/usr/bin/env node

const program = require('commander');
//require拿到package.json里面的对象；
const package = require('./package.json')
const {helpOptions} = require('./lib/core/help')
const {createCommands} = require('./lib/core/create')

program.version(package.version);
helpOptions();
/* createCommands(); */
//编译
program.parse(process.argv);

