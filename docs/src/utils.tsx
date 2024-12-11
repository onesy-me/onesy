import { colors } from '@onesy/style-react';
import OnesySubscrption from '@onesy/subscription';

export const libraries = [
  { name: 'UI React', url: '/library/ui-react', version: 'primary', github: '/onesy/tree/main/packages/onesy-ui-react' },
  { name: 'Style React', url: '/library/style-react', version: 'secondary', github: '/onesy/tree/main/packages/onesy-style-react' },
  { name: 'Icons Material React', url: '/library/icons-material-react', version: 'secondary', github: '/onesy/tree/main/packages/onesy-icons-material-react' },
  ...[
    { name: 'AMQP', url: '/library/amqp', github: '/onesy-amqp' },
    { name: 'API', url: '/library/api', github: '/onesy-api' },
    { name: 'AWS', url: '/library/aws', github: '/onesy-aws' },
    { name: 'Binary Tree', url: '/library/binary-tree', github: '/onesy-binary-tree' },
    { name: 'Cache', url: '/library/cache', github: '/onesy-cache' },
    { name: 'Cookie', url: '/library/cookie', github: '/onesy-cookie' },
    { name: 'Date', url: '/library/date', github: '/onesy-date' },
    { name: 'Diff', url: '/library/diff', github: '/onesy-diff' },
    { name: 'Errors', url: '/library/errors', github: '/onesy-errors' },
    { name: 'Heap', url: '/library/heap', github: '/onesy-heap' },
    { name: 'Huffman Code', url: '/library/huffman-code', github: '/onesy-huffman-code' },
    { name: 'Log', url: '/library/log', github: '/onesy-log' },
    { name: 'Lz77', url: '/library/lz77', github: '/onesy-lz77' },
    { name: 'Meta', url: '/library/meta', github: '/onesy-meta' },
    { name: 'Models', url: '/library/models', github: '/onesy-models' },
    { name: 'Mongo', url: '/library/mongo', github: '/onesy-mongo' },
    { name: 'Node', url: '/library/node', github: '/onesy-node' },
    { name: 'Redis', url: '/library/redis', github: '/onesy-redis' },
    { name: 'Request', url: '/library/request', github: '/onesy-request' },
    { name: 'Storage', url: '/library/storage', github: '/onesy-storage' },
    { name: 'Style', url: '/library/style', github: '/onesy-style' },
    { name: 'Subscription', url: '/library/subscription', github: '/onesy-subscription' },
    { name: 'Test', url: '/library/test', github: '/onesy-test' },
    { name: 'Utils', url: '/library/utils', github: '/onesy-utils' },
    { name: 'Zip', url: '/library/zip', github: '/onesy-zip' },
    { name: 'Algorithms', url: '/library/algorithms', github: '/onesy-algorithms' },
    { name: 'Linked List', url: '/library/linked-list', github: '/onesy-linked-list' },
    { name: 'Queue', url: '/library/queue', github: '/onesy-queue' },
    { name: 'Stack', url: '/library/stack', github: '/onesy-stack' },
    { name: 'Hash Table', url: '/library/hash-table', github: '/onesy-hash-table' },
    { name: 'Graph', url: '/library/graph', github: '/onesy-graph' },
  ].sort((a: any, b: any) => a.name.localeCompare(b.name))
];

export const images = [
  { id: 'primary', color: colors.yellow[500], label: 'Default theme', image: '/assets/image/image-yellow.jpg', alt: 'Photo by Felix Mittermeier' },
  { id: 'image-green', label: 'Green leaves image to theme', image: '/assets/image/image-green.jpg', alt: 'Photo by Chris Lee on Unsplash' },
  { id: 'image-orange', label: 'Oranges image to theme', image: '/assets/image/image-orange.jpg', alt: 'Photo by Karolina Grabowska' },
  { id: 'image-pink', label: 'Pink Shiba Inu image to theme', image: '/assets/image/image-pink.jpg', alt: 'Photo by Anna Shvets' }
];

export const themeImageSub = new OnesySubscrption('primary');

export const newImagesSub = new OnesySubscrption([]);

export const importIframeStyles = (iframeDocument: Document) => {
  const styleSheets = window.document.styleSheets;

  for (const styleSheet of Array.from(styleSheets)) {
    if (!(styleSheet.ownerNode as any).onesy) {
      iframeDocument.head.append((styleSheet.ownerNode as any)?.cloneNode(true));

      continue;
    }

    let css = '';

    const rules = styleSheet?.cssRules;

    for (const rule of Array.from(rules)) css += rule.cssText;

    const style = window.document.createElement('style');

    style.innerHTML = css;

    iframeDocument.head.append(style);
  }
};

export const imageDownload = async (url: string) => {
  return new Promise((resolve, reject) => {
    const img = window.document.createElement('img');

    img.crossOrigin = 'Anonymous';

    img.onload = () => resolve(true);

    img.onerror = () => resolve(false);

    img.src = url;
  });
};

export const addScript = (id: string, url: string) => new Promise((resolve, reject) => {
  const exists = window.document.getElementById(id);

  if (exists) return resolve(true);

  const script = window.document.createElement('script');

  script.id = id;
  script.src = url;

  script.onload = () => resolve(true);
  script.onerror = () => resolve(false);
  script.onabort = () => resolve(false);

  window.document.head.append(script);
});
