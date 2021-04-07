// -*- coding: utf-8, tab-width: 2 -*-

import cash from 'cash-dom';
import JSON5 from 'json5';

Array.from(cash('.anned21-standalone')).forEach(function initOne(dest) {
  const cfg = (JSON5.parse(cash(dest).find('script.config').html()) || {});
  dest.config = cfg; // eslint-disable-line no-param-reassign
  cash(dest).find('script').remove();
});
