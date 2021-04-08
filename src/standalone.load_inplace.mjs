// -*- coding: utf-8, tab-width: 2 -*-

import cash from 'cash-dom';
import Vue from 'vue';

import resolveConfig from './config.resolve.mjs';

function deepCopyJson(x) { return JSON.parse(JSON.stringify(x)); }

Array.from(cash('.anned21-standalone')).forEach(async function initOne(dest) {
  const cfgPr = resolveConfig(cash(dest).find('script.config').html());
  cash(dest).find('script').remove();
  const cfg = await cfgPr;
  const vueInst = new Vue({
    el: dest,
    data: deepCopyJson({
      // deepCopy b/c vue will modify stuff in-place
      config: cfg,
    }),
  });
  Object.assign(dest, { cfg, vueInst });
  console.info('Initialized anned:', dest, cfg);
});
