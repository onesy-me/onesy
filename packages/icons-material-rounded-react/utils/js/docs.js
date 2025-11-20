const fsNode = require('node:fs/promises');
const path = require('path');
const fs = require('fs');

const OnesyNode = require('@onesy/node').default;

const wd = process.cwd();

const esm = path.resolve(wd, './build/esm');

const index = path.resolve(esm, 'index.js');

const method = async () => {
  try {
    const values = {
      index: await OnesyNode.file.get(index, false)
    };

    const versions = ['rounded-w100'];

    // const versions = ['rounded', 'rounded-filled', 'rounded-w100', 'rounded-w100-filled'];

    versions.forEach(item => {
      values[item] = {
        value: `// @ts-nocheck
import React from 'react';
import { Icon } from '@onesy/ui-react';
import _extends from '@babel/runtime/helpers/extends';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable })), t.push.apply(t, o) } return t } function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)) }) } return e }
import { c as _c } from 'react/compiler-runtime';
import { jsx as _jsx } from 'react/jsx-runtime';

`,
        exports: '['
      };
    });

    const icons = values.index.match(/default as ([^\}]+)/g).map(item => item.replace('default as ', '').trim());

    try {
      for (const version of versions) {
        const iconsFile = path.resolve(wd, `/icons/icons-elements-${version}.tsx`);

        if (fs.existsSync(iconsFile)) await fsNode.rm(iconsFile);
      }
    }
    catch (error) {
      console.log(error);
    }

    await Promise.all(icons.filter(icon => icon.endsWith('W100') && !icon.endsWith('FilledW100')).map(icon => new Promise(async (resolve, reject) => {
      let version = 'rounded-w100';

      // if (icon.endsWith('Filled')) version = 'rounded-filled';

      if (icon.endsWith('W100')) version = 'rounded-w100';

      // if (icon.endsWith('W100Filled')) version = 'rounded-w100-filled';

      if (version) {
        const esmFile = await OnesyNode.file.get(path.resolve(esm, `${icon}.js`), false);

        const value = esmFile.match(/const [\s\S]+/)[0].split('export default')[0];

        values[version].exports += ` ${icon}, `

        values[version].value += value + '\n\n';
      }

      resolve();
    })));

    versions.forEach(item => {
      values[item].exports += ']';

      values[item].exports = values[item].exports.replace(', ]', ' ]');
    });

    await Promise.all(versions.map(item => new Promise(async resolve => {
      const iconsFile = path.resolve(wd, `../../../docs/src/ui/icons/icons-elements-${item}.tsx`);

      values[item].value += `export default ${values[item].exports};`;

      await OnesyNode.file.add(iconsFile, values[item].value);

      resolve();
    })))
  }
  catch (error) {
    console.log(error);
  }
};

method();


