const path = require('path');
const fg = require('fast-glob');
const fs = require('fs');

const OnesyNode = require('@onesy/node').default;

const wd = process.cwd();

const capitalize = value => value.charAt(0).toUpperCase() + value.slice(1);

const resolve = value => capitalize(value.replace(/[-_]./g, v => v[1] !== undefined ? v[1].toUpperCase() : ''));

const src = path.resolve(wd, './src');

const prefix = 'IconMaterial';

let made = 0;
let processed = 0;

const valueMake = async (url, name, short_name) => {
  const valueFile = await OnesyNode.file.get(url, false);

  const viewBox = valueFile.match(/viewBox="([^"]+)"/g)?.[0]?.replace(/viewBox="|"/g, '') || '0 0 24 24';

  let value = (valueFile).match(/<svg[^>]+?>([^$]+?)<\/svg>/)[1];

  value = `import { Icon, IIcon } from '@onesy/ui-react';

const ${prefix}${name} = (props: IIcon) => {

  return (
    <Icon
      name='${name}'

      short_name='${short_name}'

      viewBox='${viewBox}'

      {...props}
    >
      ${value}
    </Icon>
  );
};

${prefix}${name}.displayName = 'Onesy${prefix}${name}';

export default ${prefix}${name};
`;

  value = value
    .replace(/xlink:href/g, 'xlinkHref')
    .replace(/sketch:type/g, 'sketchType')
    .replace(/xmlns:xlink/g, 'xmlnsXlink')
    .replace(/enable-background/g, 'enableBackground')
    .replace(/clip-path/g, 'clipPath')
    .replace(/fill-opacity/g, 'fillOpacity')
    .replace(/fill-rule/g, 'fillRule');

  await OnesyNode.file.add(path.join(src, `${prefix}${name}.tsx`), value);

  made++;
};

async function method() {
  const root = path.resolve(wd, '../../../other/google-material-icons/symbols/web');
  const rootSrc = path.resolve(wd, '../../../other/google-material-icons/src');

  const icons = (await fg(path.join(root, '/**'), { onlyDirectories: true, deep: 1 })).map(item => path.basename(item)).filter(item => !item.startsWith('types.tsx'));

  // Pre-find all two-tone icons at once
  const twoTonePattern = path.join(rootSrc, '/**/materialiconstwotone/24px.svg');
  const allTwoToneIcons = await fg(twoTonePattern, { onlyFiles: true });

  const twoToneMap = new Map();

  for (const twoTonePath of allTwoToneIcons) {
    const pathParts = twoTonePath.split(path.sep);
    const iconNameIndex = pathParts.findIndex(part => part.includes('materialiconstwotone')) - 1;

    if (iconNameIndex >= 0) {
      const iconName = pathParts[iconNameIndex];

      twoToneMap.set(iconName, twoTonePath);
    }
  }

  const iconsToUse = icons.filter(icon => twoToneMap.get(icon));

  async function makeIcon(icon) {
    const rootIcon = path.resolve(root, icon);

    const iconName = resolve(icon);

    // Two tone
    const twoTonePath = twoToneMap.get(icon);

    const exists = (await fg(path.join(src, `${prefix}${iconName}.tsx`)))[0];

    if (!exists) await valueMake(twoTonePath, `${iconName}`, iconName);

    console.log('Icons', ++processed);

    console.log('Made', made);
  }

  for (const icon of iconsToUse) await makeIcon(icon);

  // Make index.tsx
  const allIcons = (await fg(path.join(src, `/**`), { onlyFiles: true })).filter(item => !item.includes('/index') && !item.includes('/types'));

  let index = `\n`;

  for (const url of allIcons) {
    const name = path.basename(url).slice(0, -4);

    if (['index'].every(item => !name.includes(item))) index += `export { default as ${name} } from './${name}';\n`;
  }

  const indexPath = path.join(src, 'index.tsx');

  // Remove previous index
  if (fs.existsSync(indexPath)) await OnesyNode.file.remove(indexPath);

  // Add new index
  await OnesyNode.file.add(indexPath, index);
}

method();


