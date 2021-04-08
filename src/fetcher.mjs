// -*- coding: utf-8, tab-width: 2 -*-
/* global window */

import json5 from 'json5';


const EX = async function fetcher(mtdName, url) {
  const resp = await window.fetch(url);
  const mtdImpl = resp[mtdName];
  return mtdImpl.call(resp);
};


Object.assign(EX, {

  async text(...a) { return EX('text', ...a); },
  async json5(...a) { return json5.parse(await EX('text', ...a)); },

});


export default EX;
