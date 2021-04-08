// -*- coding: utf-8, tab-width: 2 -*-

import json5 from 'json5';
// import mergeOpts from 'merge-options';

import defaultConfig from './config.default.mjs';

const mergeOpts = Object.assign;


const EX = async function resolveConfig(origSpec) {
  const origParsed = ((origSpec && json5.parse(origSpec)) || null);
  const extendsUrl = origParsed['@extends'];
  const merged = mergeOpts({}, defaultConfig,
    (extendsUrl && (await import(extendsUrl)).default),
    origParsed);
  delete merged['@extends'];
  return merged;
};



export default EX;
