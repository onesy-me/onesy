const path = require('path');
const childProcess = require('child_process');
const yargs = require('yargs');
const fse = require('fs-extra');
const fg = require('fast-glob');

const { promisify } = require('@onesy/utils');

const wd = process.cwd();
const moduleFolder = path.basename(wd);
const to = path.resolve(wd, './build');

const exec = promisify(childProcess.exec, { onError: 'resolve' });

const cache = {};

// Build
async function buildBabel(variant = 'esm') {
  const { outPath, log } = cache;

  const env = {
    NODE_ENV: 'production',
    BABEL_ENV: variant,
  };
  const babel = path.resolve(__dirname, '../../babel.config.js');
  const src = path.resolve('./src');

  const out = path.resolve(
    outPath,
    {
      esm: './esm',
      node: './',
    }[variant],
  );

  const arguments = [
    src,

    '--extensions',
    `".js,.jsx,.ts,.tsx"`,

    '--config-file',
    babel,

    '--out-dir',
    out,
  ];

  const cmd = ['babel', ...arguments].join(' ');

  if (log) console.log(`\n🌱 Running ${cmd}\n`);

  const [error, response] = await exec(cmd, { env: { ...process.env, ...env } });

  if (error) {
    console.error('Build babel error: \n' + error + response, '\n\n');

    throw new Error();
  }

  if (response) console.log(response);
}

async function buildUMD() {
  const { log } = cache;

  const env = {
    BABEL_ENV: 'esm',
  };
  const rollup = path.resolve(__dirname, '../../rollup.config.js');

  const arguments = [
    '-c',
    rollup,
  ];

  const cmd = ['rollup', ...arguments].join(' ');

  if (log) console.log(`\n🌱 Running ${cmd}\n`);

  const [error, response] = await exec(cmd, { env: { ...process.env, ...env } });

  if (error) {
    console.error(error);

    if (response) console.error(response);

    console.log();

    throw new Error();
  }

  if (response) console.log(response.slice(1, -1));
}

async function build() {
  const { log } = cache;

  if (log) console.log(`🌱 Build\n`);

  // Prod
  await buildBabel();

  // Node
  await buildBabel('node');

  // UMD
  // only for
  // onesy-style-react
  if (moduleFolder.includes('style')) await buildUMD();

  if (log) console.log(`🌱 Build done\n`);
}

// Move
async function makePackage() {
  const { log } = cache;

  if (log) console.log(`\n🌱 Making main package.json in build folder\n`);

  // Move main package.json
  const package = require(path.resolve(wd, './package.json'));

  const { scripts, devDependencies, ...other } = package;

  const newPackage = {
    ...other,
    main: './index.js',
    module: './esm/index.js',
    types: './index.d.ts',
  };

  // Bug fix use of exports
  delete newPackage.exports;
  // npm publish issue with files
  delete newPackage.files;

  await fse.writeFile(path.resolve(to, './package.json'), JSON.stringify(newPackage, null, 2), 'utf8');

  cache['package'] = newPackage;

  if (log) console.log(`🌱 Main package.json added to build`);
}

const capitalize = value => `${value[0].toUpperCase()}${value.slice(1).toLowerCase()}`;

const name = moduleFolder.split('-').map(item => capitalize(item)).join('');

async function addLicense() {
  const { log } = cache;

  if (log) console.log(`🌱 Adding license to important build files\n`);

  const license = `/** @license ${name} v${cache['package'].version}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
  `;

  const files = [
    './index.js',
    './esm/index.js',
    `./umd/${moduleFolder}.dev.js`,
    `./umd/${moduleFolder}.prod.min.js`,
  ];

  await Promise.all(
    files.map(async relativePath => {
      const filePath = path.resolve(to, relativePath);
      const exists = fse.existsSync(filePath);

      if (exists) {
        const data = await fse.readFile(filePath, 'utf8');

        if (data.indexOf('@license onesy') === -1) await fse.writeFile(filePath, license + data, 'utf8');
      }
    })
  );

  if (log) console.log(`🌱 Appended LICENSE to important build files`);
}

async function moveFile(value) {
  const source = path.resolve(wd, value);
  const target = path.resolve(to, path.basename(value));

  await fse.copy(source, target);
}

async function moveFiles() {
  const { log } = cache;

  const toMoveFiles = [
    'README.MD',
    path.resolve(wd, '../../LICENSE'),
  ];

  if (log) console.log(`🌱 Adding ${toMoveFiles.join(', ')} files to build\n`);

  await Promise.all(toMoveFiles.map(value => moveFile(value)));
}

async function move() {
  const { log } = cache;

  if (log) console.log(`🌱 Move\n`);

  await makePackage();

  await moveFiles();

  await addLicense();

  if (log) console.log(`🌱 Move done\n`);
}

// Types
async function types() {
  const { log } = cache;

  if (log) console.log(`🌱 Types\n`);

  const ts = path.resolve(wd, 'tsconfig.build.json');

  const arguments = [
    '-b',
    ts
  ];

  const cmd = ['yarn tsc', ...arguments].join(' ');

  if (log) console.log(`\n🌱 Running ${cmd}\n`);

  const [error, response] = await exec(cmd);

  if (error) {
    console.error('Types error: \n' + response.split('\n').slice(1, -2).join('\n'), '\n\n');

    throw new Error();
  }

  if (log) console.log(`🌱 Types done\n`);
}

// Add to modules
async function addToModules() {
  const { log } = cache;

  const folders = (await fg(path.join(path.resolve('build'), '/**'), { onlyDirectories: true, deep: 1 })).filter(item => ['esm', 'umd'].every(item_ => item.indexOf(item_) === -1));

  if (folders.length) {
    if (log) console.log(`\n🌱 Adding to modules\n`);

    await Promise.all(folders.map(item => {
      const name = path.basename(item);

      const newPackage = {
        sideEffects: false,
        main: './index.js',
        module: `../esm/${name}/index.js`,
        types: './index.d.ts',
      };

      return fse.writeFile(path.resolve(wd, 'build', name, './package.json'), JSON.stringify(newPackage, null, 2), 'utf8');
    }));

    if (log) console.log(`🌱 Made package.json in modules`);
  }
}

const capitalizeCammelCase = value => typeof value === 'string' ? value.charAt(0).toUpperCase() + value.slice(1) : value;

const kebabCasetoCammelCase = value => typeof value === 'string' ? value.replace(/-./g, v => v[1] !== undefined ? v[1].toUpperCase() : '') : value;

const capitalizedCammelCase = value => capitalizeCammelCase(kebabCasetoCammelCase(value));

async function docsUpdateTypes(pathTypes, pathUse, isModules, options = {}) {
  const {
    previous,
    next
  } = options;

  let data = await fse.readFile(pathTypes, 'utf8');

  const getName = pathValue => pathValue ? (path.parse(pathValue).name).replace('.d', '').replace(/[\(\):]/gi, '') : '';

  const names = {
    previous: getName(previous),
    path: getName(pathTypes),
    next: getName(next),
    lib: moduleFolder.replace('onesy-', '').replace(/[-_]/gi, ' ')
  };

  if (names.path.includes('-')) names.path = capitalizedCammelCase(names.path);

  const usePath = `${pathUse}${!isModules ? '.md' : `/${names.path}.md`}`;

  const use = fse.existsSync(usePath) ? await fse.readFile(usePath, 'utf8') : '';

  let values = use?.trim().match(/(?!^|}~)[^~]+(?!$|~{)/ig) || [];

  if (values[0]?.startsWith('#')) values[0] = `#${values[0]}`;

  if (values[values.length - 1]?.endsWith('\n``')) values[values.length - 1] = values[values.length - 1] + '`';

  if (values.length > 0 && values.length <= 2) {
    const md = (values[0].split(/## API[^~]+(?!$|~])/))[0]?.trim();
    const api = (values[0].match(/## API[^~]+(?!$|~])/) || [])[0]?.trim();

    values.splice(0, 1, md, api);

    values = values.filter(Boolean);
  }

  // API
  let parts = [];

  data.split('\n').forEach(item => {
    if ([' ', '}'].includes(item[0])) parts[parts.length - 1] += `\n${item}`;
    else parts.push(item);
  });

  parts = parts
    .filter(Boolean)
    .map(item => item.replace(/(export|declare) /g, '').replace(/`/gi, `'`))
    .filter(item => {
      const partName = (item.replace('default ', '').match(/(?!default|type|interface|const|function|class) [^ \(\)\{\}\<\:]+/i) || [])[0]?.trim();

      return (
        !item.includes(`/// <reference`) &&
        !item.startsWith('import') &&
        !!partName
      );
    });

  let valueNew = `\n\n## API\n\n`;

  parts.forEach(item => {
    const partName = (item.replace('default ', '').match(/(?!default|type|interface|const|function|class) [^ \(\)\{\}\<\:]+/i) || [])[0]?.trim();

    valueNew += `#### ${partName}\n\n\`\`\`ts\n${item.trim()}\n\`\`\`\n\n`;
  });

  // Update values value
  let added = false;

  values = values.map(item => {
    if (item.includes('# API')) {
      added = true;

      return valueNew;
    }

    return item;
  });

  if (!added) values.push(valueNew);

  // BottomNavigation
  // Add bottom navigation if it doesn't exist
  if (!values.find(item => item.startsWith('{\n') && item.endsWith('}'))) {
    values.push('{\n  "element": "BottomNavigation",\n  "props": {\n    "previous": {\n      "label": "AMQP: Start",\n      "to": "/dev/amqp/start"\n    },\n    "next": {\n      "label": "API: Use",\n      "to": "/dev/api/use"\n    }\n  }\n}');
  }

  values = values.map(item => {
    // BottomNavigation
    if (item.startsWith('{\n') && item.endsWith('}')) {
      const object = JSON.parse(item);

      // Previous
      if (!names.previous) {
        object.props.previous.label = `${capitalize(names.lib)}: Start`;
        object.props.previous.to = `/dev/${names.lib}/start`;
      }
      else {
        object.props.previous.label = `${capitalize(names.lib)}: ${names.previous}`;
        object.props.previous.to = `/dev/${names.lib}/use${isModules ? `/${names.previous}` : ''}`;
      }

      // Next
      if (!names.next) {
        object.props.next.label = `${capitalize(names.lib)}: Start`;
        object.props.next.to = `/dev/${names.lib}/start`;

      }
      else {
        object.props.next.label = `${capitalize(names.lib)}: ${names.next}`;
        object.props.next.to = `/dev/${names.lib}/use${isModules ? `/${names.next}` : ''}`;
      }

      return JSON.stringify(object, null, 2);
    }

    return item;
  });

  values = values.map(item => {
    if (item.startsWith('{')) return `~${item}~`;

    return item;
  });

  // Update the file or create it if it doesn't exist
  await fse.writeFile(usePath, values.join('\n'));
}

async function docs() {
  const { log } = cache;

  if (log) console.log(`🌱 Starting docs`);

  // Find the build folder
  // and go to all levels, and find .d.ts files that are not index.d.ts
  // and all nested folders if there are any as modules
  const paths = {
    build: path.resolve('build')
  };

  let files = [];

  // Files
  const folders = (await fg(path.join(path.resolve('build'), '/**'), { onlyDirectories: true, deep: 1 })).filter(item => ['esm', 'umd'].every(item_ => item.indexOf(item_) === -1));

  const isModules = !!folders.length;

  if (isModules) {
    for (const folder of folders) {
      const filesFolder = (await fg(path.join(folder, '*.d.ts'))).filter(item => !item.includes('index.d.ts'));

      files.push(...filesFolder);
    }
  }

  files.push(...(await fg(path.join(paths.build, '*.d.ts'))).filter(item => !item.includes('index.d.ts')));

  // For each file find the appropriate use file
  // in docs public, and replace the api
  // with the new value
  paths.md = path.resolve(wd, '../../docs/public/assets/md/dev', moduleFolder.replace('onesy-', ''));

  paths.use = path.join(paths.md, 'use');

  const use = fse.existsSync(paths.use);

  if (isModules) {
    if (!use) fse.mkdirSync(paths.use);
  }

  await Promise.all(files.map((item, index) => docsUpdateTypes(item, paths.use, isModules, {
    previous: files[index - 1],
    next: files[index + 1]
  })));

  if (log) console.log(`🌱 Done docs`);
}

async function run(argv) {
  // Use argvs in methods
  Object.assign(cache, argv);

  // Minor
  console.log();

  // Build
  await build();

  // Move
  await move();

  // Types
  await types();

  // Add to modules
  await addToModules();

  // Docs
  if (argv.docs) await docs();
}

yargs
  .command({
    command: '$0',
    description: 'Build',
    builder: command => command
      .option('out-path', { alias: 'o', default: './build', type: 'string' })
      .option('log', { alias: 'l', type: 'boolean' })
      .option('docs', { alias: 'd', type: 'boolean' })
    ,
    handler: run,
  })
  .showHelpOnFail(false)
  .help()
  .strict(true)
  .version(false)
  .parse();
