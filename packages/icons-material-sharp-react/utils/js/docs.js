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

    const versions = ['sharp', 'sharp-filled', 'sharp-w100', 'sharp-w100-filled'];

    // const versions = ['sharp', 'sharp-filled', 'sharp-w100', 'sharp-w100-filled', 'sharp', 'sharp-filled', 'sharp-w100', 'sharp-w100-filled', 'two-tone'];

    versions.forEach(item => {
      values[item] = {
        value: `// @ts-nocheck
import React from 'react';
import { Icon } from '@onesy/ui-react';
import _extends from '@babel/runtime/helpers/extends';

`,
        exports: '['
      };
    });

    const icons = values.index.match(/default as ([^\}]+)/g).map(item => item.replace('default as ', '').trim());

    try {
      for (const version of versions) {
        const iconsFile = path.resolve(wd, `../../docs/icons/icons-elements-${version}.tsx`);

        if (fs.existsSync(iconsFile)) await fsNode.rm(iconsFile);
      }
    }
    catch (error) {
      console.log(error);
    }

    await Promise.all(icons.map(icon => new Promise(async (resolve, reject) => {
      let version = 'sharp';

      if (icon.endsWith('Filled')) version = 'sharp-filled';

      if (icon.endsWith('W100')) version = 'sharp-w100';

      if (icon.endsWith('W100Filled')) version = 'sharp-w100-filled';

      // if (icon.endsWith('TwoTone')) version = 'two-tone';

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
      const iconsFile = path.resolve(wd, `../../docs/icons/icons-elements-${item}.tsx`);

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


