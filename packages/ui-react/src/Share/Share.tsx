import React from 'react';

import { clamp, copyToClipboard, is, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialLink from '@onesy/icons-material-rounded-react/IconMaterialLinkW100';
import IconMaterialMail from '@onesy/icons-material-rounded-react/IconMaterialMailW100';
import IconMaterialPrint from '@onesy/icons-material-rounded-react/IconMaterialPrintW100';
import IconMaterialMoreHoriz from '@onesy/icons-material-rounded-react/IconMaterialMoreHorizW100';

import LineElement from '../Line';
import IconElement, { IIcon } from '../Icon';
import TypeElement from '../Type';
import MenuItemElement from '../MenuItem';
import TooltipElement from '../Tooltip';
import InteractionElement from '../Interaction';
import MenuElement from '../Menu';
import BottomSheetElement from '../BottomSheet';
import ListElement from '../List';
import useMediaQuery from '../useMediaQuery';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';

const IconCustomFacebook = React.forwardRef((props: IIcon, ref) => {

  return (
    <IconElement
      ref={ref}

      name='Facebook'

      viewBox="0 0 512 512"

      {...props}
    >
      <path d="m374.244 285.825 14.105-91.961h-88.233v-59.677c0-25.159 12.325-49.682 51.845-49.682h40.116V6.214S355.67 0 320.864 0c-72.67 0-120.165 44.042-120.165 123.775v70.089h-80.777v91.961h80.777v222.31A320.565 320.565 0 0 0 250.408 512c16.911 0 33.511-1.324 49.708-3.865v-222.31h74.128Z" />
    </IconElement>
  );
});

const IconCustomX = React.forwardRef((props: IIcon, ref) => {

  return (
    <IconElement
      ref={ref}

      name='X'

      viewBox="0 0 1200 1227"

      {...props}
    >
      <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" />
    </IconElement>
  );
});

const IconCustomLinkedin = React.forwardRef((props: IIcon, ref) => {

  return (
    <IconElement
      ref={ref}

      name='Linkedin'

      viewBox="0 0 512 512"

      {...props}
    >
      <path d="M51.326 185.85h90.011v270.872H51.326V185.85zM96.934 55.278C66.127 55.278 46 75.503 46 102.049c0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71V185.85h-90.038c1.192 25.411 0 270.872 0 270.872h90.038V305.448c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926H466V301.398c0-83.199-44.402-121.911-103.661-121.911z" />
    </IconElement>
  );
});

const IconCustomPinterest = React.forwardRef((props: IIcon, ref) => {

  return (
    <IconElement
      ref={ref}

      name='Pinterest'

      viewBox="0 0 56.693 56.693"

      {...props}
    >
      <path d="M30.374 4.622c-13.586 0-20.437 9.74-20.437 17.864 0 4.918 1.862 9.293 5.855 10.922.655.27 1.242.01 1.432-.715.132-.5.445-1.766.584-2.295.191-.717.117-.967-.412-1.594-1.151-1.357-1.888-3.115-1.888-5.607 0-7.226 5.407-13.695 14.079-13.695 7.679 0 11.898 4.692 11.898 10.957 0 8.246-3.649 15.205-9.065 15.205-2.992 0-5.23-2.473-4.514-5.508.859-3.623 2.524-7.531 2.524-10.148 0-2.34-1.257-4.292-3.856-4.292-3.058 0-5.515 3.164-5.515 7.401 0 2.699.912 4.525.912 4.525l-3.678 15.582c-1.092 4.625-.164 10.293-.085 10.865.046.34.482.422.68.166.281-.369 3.925-4.865 5.162-9.359.351-1.271 2.011-7.859 2.011-7.859.994 1.896 3.898 3.562 6.986 3.562 9.191 0 15.428-8.379 15.428-19.595.001-8.483-7.183-16.382-18.101-16.382z" />
    </IconElement>
  );
});

const IconCustomReddit = React.forwardRef((props: IIcon, ref) => {

  return (
    <IconElement
      ref={ref}

      name='Reddit'

      viewBox="0 0 56.7 56.7"

      {...props}
    >
      <path d="M53.048 28.446a5.696 5.696 0 0 0-5.69-5.69 5.647 5.647 0 0 0-3.75 1.419c-3.763-2.408-8.784-3.925-14.322-4.089l3.389-11.59 8.32 1.546c0 .068-.014.132-.01.2a3.6 3.6 0 0 0 3.774 3.408 3.6 3.6 0 0 0 3.407-3.774 3.6 3.6 0 0 0-3.774-3.408 3.587 3.587 0 0 0-2.945 1.84l-.003-.001-10.026-1.863-3.993 13.64c-5.552.147-10.589 1.656-14.368 4.059a5.647 5.647 0 0 0-3.715-1.387 5.697 5.697 0 0 0-5.69 5.69c0 1.94.999 3.73 2.617 4.774a10.124 10.124 0 0 0-.155 1.73c0 8.212 9.956 14.894 22.194 14.894S50.5 43.162 50.5 34.949c0-.568-.052-1.128-.145-1.68a5.69 5.69 0 0 0 2.692-4.823zM17.76 32.318a3.496 3.496 0 1 1 6.993.002 3.496 3.496 0 0 1-6.993-.002zm18.79 9.458c-.104.108-2.613 2.661-8.283 2.661-5.7 0-7.98-2.588-8.073-2.698a.894.894 0 0 1 1.352-1.168c.052.056 1.954 2.079 6.72 2.079 4.85 0 6.976-2.095 6.998-2.115a.895.895 0 0 1 1.286 1.24zm-.695-5.961a3.496 3.496 0 1 1-.003-6.992 3.496 3.496 0 0 1 .003 6.992z" />
    </IconElement>
  );
});

const IconCustomWhatsapp = React.forwardRef((props: IIcon, ref) => {

  return (
    <IconElement
      ref={ref}

      name='Whatsapp'

      viewBox="0 0 56.693 56.693"

      {...props}
    >
      <path d="M46.38 10.714C41.73 6.057 35.544 3.492 28.954 3.489c-13.579 0-24.63 11.05-24.636 24.633a24.589 24.589 0 0 0 3.289 12.316L4.112 53.204l13.06-3.426a24.614 24.614 0 0 0 11.772 2.999h.01c13.577 0 24.63-11.052 24.635-24.635.002-6.582-2.558-12.772-7.209-17.428zM28.954 48.616h-.009a20.445 20.445 0 0 1-10.421-2.854l-.748-.444-7.75 2.033 2.07-7.555-.488-.775a20.427 20.427 0 0 1-3.13-10.897c.004-11.29 9.19-20.474 20.484-20.474a20.336 20.336 0 0 1 14.476 6.005 20.352 20.352 0 0 1 5.991 14.485c-.004 11.29-9.19 20.476-20.475 20.476z" />
      <path d="M40.185 33.281c-.615-.308-3.642-1.797-4.206-2.003-.564-.205-.975-.308-1.385.308-.41.617-1.59 2.003-1.949 2.414-.359.41-.718.462-1.334.154-.615-.308-2.599-.958-4.95-3.055-1.83-1.632-3.065-3.648-3.424-4.264-.36-.617-.038-.95.27-1.257.277-.276.615-.719.923-1.078.308-.36.41-.616.616-1.027.205-.41.102-.77-.052-1.078-.153-.308-1.384-3.338-1.897-4.57-.5-1.2-1.008-1.038-1.385-1.057-.359-.018-.77-.022-1.18-.022s-1.077.154-1.642.77c-.564.616-2.154 2.106-2.154 5.135 0 3.03 2.206 5.957 2.513 6.368.308.41 4.341 6.628 10.516 9.294a35.341 35.341 0 0 0 3.509 1.297c1.474.469 2.816.402 3.877.244 1.183-.177 3.642-1.49 4.155-2.927.513-1.438.513-2.67.359-2.927-.154-.257-.564-.41-1.18-.719z" />
    </IconElement>
  );
});

const IconCustomViber = React.forwardRef((props: IIcon, ref) => {

  return (
    <IconElement
      ref={ref}

      name='Viber'

      viewBox="0 0 100 100"

      {...props}
    >
      <path d="M57.4 4h-15C21.2 4 3.9 21.3 3.9 42.5c0 14.1 7.6 27 20 33.8v15.2c0 2.5 2 4.5 4.5 4.5 1.2 0 2.4-.5 3.2-1.3L45.3 81h12.1c21.2 0 38.5-17.3 38.5-38.5S78.7 4 57.4 4zm-9.1 16.7c.2-.1.2-.2.9-.2h.6c.6 0 1.5.1 2 .1 2.4.3 4 .6 6.3 1.7 2.2 1 3.6 2 5.4 3.8 1.7 1.7 2.7 3 3.7 5 1.4 2.8 2.2 6.1 2.4 9.8 0 1.3 0 1.4-.2 1.6-.2.2-.4.3-.7.3-.3 0-.5-.2-.7-.4-.1-.2-.1-.3-.2-1.3-.1-1.6-.2-2.6-.4-3.8-.9-4.9-3.3-8.8-7.1-11.6-3.1-2.3-5.9-3.2-10.3-3.5-1.4-.1-1.5-.1-1.7-.3-.2-.1-.3-.4-.3-.6.1-.2.1-.4.3-.6zm7.6 8.9c-1.5-.9-3.9-1.6-5.9-1.7-.6-.1-.9-.1-1.1-.4-.3-.3-.3-.7-.1-1 .1-.2.4-.5 2.3-.2 4.4.6 7.8 2.6 10 5.8 1.2 1.8 2 3.9 2.3 6.2.1.7.1 2.2 0 2.5 0 .1-.3.4-.4.5-.2.1-.6.1-.8-.1-.2-.1-.5-.2-.5-1.5 0-2-.5-4.1-1.4-5.7-1.1-1.8-2.6-3.3-4.4-4.4zm1.3 10.3c-.2.2-.8.2-1.1 0-.2-.2-.3-.3-.3-.9-.1-1.1-.3-1.8-.6-2.5-.7-1.5-2-2.3-4.2-2.6-.9-.1-1-.2-1.2-.4-.2-.2-.2-.4-.2-.7.1-.3.2-.5.4-.6.2-.1.2-.1.4-.1h.4c.3 0 .9.1 1.2.1 1.4.3 2.4.8 3.3 1.6 1.2 1.1 1.8 2.3 2.1 4.2.2 1.5.1 1.7-.2 1.9zm13.6 19c-.3.7-.9 1.6-1.3 2.2-.8 1.1-1.8 2.2-2.7 2.9-.2.2-.4.3-.5.4-.2.1-.3.2-.4.3-.8.5-1.4.9-2.1 1.1-.5.2-1 .2-1.6.3h-.5c-.9 0-1.5-.2-2.7-.7-1-.4-2.1-.9-3.2-1.4l-.3-.1-3-1.5c-.1-.1-.3-.1-.4-.2-.9-.5-1.9-1.1-2.8-1.6l-.3-.1-.1-.1C42.7 56.6 37.5 51.9 33 46c-.4-.6-.8-1.1-1.2-1.7-.2-.3-.4-.5-.6-.8l-.6-.8c-.3-.5-.7-1-1-1.5l-.1-.1-.9-1.5-.1-.1c-1.5-2.5-2.7-5.1-3.7-7.7-1-2.8-1.3-4.4-.2-6.4.5-.8 2.2-2.4 3.4-3.3 2.1-1.5 3-2.1 3.9-2.2.6-.1 1.7-.1 2.4.2.3.1.8.4 1.1.5 1.7 1.1 5.7 6.3 7 8.7.9 1.7 1.1 2.9.8 4-.3 1.1-.9 1.7-2.7 3.2-.4.3-.8.6-1.1.9l-.2.2-.8-.6.5.5.2.2c-.1.2-.3.7-.3 1.1 0 .9.7 2.9 1.7 4.6.8 1.2 2.2 2.8 3.6 4.1 1.6 1.5 3.1 2.5 4.7 3.2 1.8.9 3 1.2 3.6.9.1-.1.2-.1.3-.2.1-.1.5-.5 1.2-1.4.9-1.1 1.4-1.7 2.1-2 .2-.1.4-.2.7-.3 1.3-.4 2.6-.3 4 .3.9.5 2.7 1.5 3.9 2.4 1.5 1 4.9 3.7 5.4 4.3.6.7.9 1.5.9 2.4.3.4.1 1.1-.1 1.8z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => ({
  root: {

  },

  version_fixed: {
    position: 'fixed',
    zIndex: 1500,

    // '&$position_top, &$position_bottom': {
    //   maxWidth: '74vh',
    //   overflow: 'auto hidden'
    // },

    // '&$position_start, &$position_end': {
    //   maxHeight: '74vh',
    //   overflow: 'hidden auto'
    // }
  },

  version_absolute: {
    position: 'absolute',

    // '&$position_top, &$position_bottom': {
    //   maxWidth: '74%',
    //   overflow: 'auto hidden'
    // },

    // '&$position_start, &$position_end': {
    //   maxHeight: '74%',
    //   overflow: 'hidden auto'
    // }
  },

  version_static: {
    position: 'relative'
  },

  position_top: {
    left: '50%',
    insetBlockStart: 0,
    transform: 'translateX(-50%)'
  },

  position_bottom: {
    left: '50%',
    insetBlockEnd: 0,
    transform: 'translateX(-50%)'
  },

  position_start: {
    top: '50%',
    insetInlineStart: 0,
    transform: 'translateY(-50%)'
  },

  position_end: {
    top: '50%',
    insetInlineEnd: 0,
    transform: 'translateY(-50%)'
  },

  item: {
    position: 'relative',
    cursor: 'pointer'
  },

  item_size_small: {
    padding: theme.methods.space.value(0.5, 'px')
  },

  item_size_regular: {
    padding: theme.methods.space.value(1, 'px')
  },

  item_size_large: {
    padding: theme.methods.space.value(1.5, 'px')
  },

  '@media print': {
    $root: {
      display: 'none'
    }
  }
}), { name: 'onesy-Share' });

export type IShare = ILine & {
  version?: 'fixed' | 'absolute' | 'static' | 'menu-items';

  position?: 'start' | 'end' | 'top' | 'bottom';

  name?: string;

  description?: string;

  url?: string;

  // only
  include?: string[];

  // all but
  exclude?: string[];

  // primary,
  // others in more
  visible?: string[];

  order?: string[];

  openIn?: 'new-window' | 'new-tab';

  start?: any;

  end?: any;

  startMore?: any;

  endMore?: any;

  render?: (item: any, props: any) => any;

  itemProps?: (item: any, index: number) => any;

  onOpen?: (value: any, event: MouseEvent) => any;

  ListItemProps?: any;
  MenuItemProps?: any;

  IconFacebook?: any;
  IconX?: any;
  IconLinkedin?: any;
  IconPinterest?: any;
  IconReddit?: any;
  IconWhatsapp?: any;
  IconCopy?: any;
  IconViber?: any;
  IconEmail?: any;
  IconPrint?: any;
  IconMore?: any;
};

const Share: React.FC<IShare> = React.forwardRef((props_, ref: any): any => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyShare?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const MenuItem = React.useMemo(() => theme?.elements?.MenuItem || MenuItemElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Interaction = React.useMemo(() => theme?.elements?.Interaction || InteractionElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const BottomSheet = React.useMemo(() => theme?.elements?.BottomSheet || BottomSheetElement, [theme]);

  const List = React.useMemo(() => theme?.elements?.List || ListElement, [theme]);

  const {
    version = 'fixed',

    position = 'start',

    size: size_,

    name,

    description,

    url,

    include,

    exclude: exclude_,

    visible = ['facebook', 'x', 'linkedin', 'whatsapp', 'viber', 'email', 'copy'],

    order,

    openIn = 'new-window',

    start,

    end,

    startMore,

    itemProps,

    endMore,

    render,

    onOpen,

    MenuItemProps,

    IconFacebook = IconCustomFacebook,
    IconX = IconCustomX,
    IconLinkedin = IconCustomLinkedin,
    IconPinterest = IconCustomPinterest,
    IconReddit = IconCustomReddit,
    IconWhatsapp = IconCustomWhatsapp,
    IconViber = IconCustomViber,
    IconCopy = IconMaterialLink,
    IconEmail = IconMaterialMail,
    IconPrint = IconMaterialPrint,
    IconMore = IconMaterialMoreHoriz,

    Component,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState<any>();

  const refs = {
    root: React.useRef<any>(undefined),
    name: React.useRef(name),
    description: React.useRef(description),
    url: React.useRef(url),
    openIn: React.useRef(openIn),
    onOpen: React.useRef(onOpen),
    copyTimeout: React.useRef<any>(undefined)
  };

  const mobile = useMediaQuery('(pointer: coarse)', { element: refs.root.current });

  refs.name.current = name;

  refs.description.current = description;

  refs.url.current = url;

  refs.openIn.current = openIn;

  refs.onOpen.current = onOpen;

  const onOpenBottomSheet = React.useCallback(() => {
    setOpen(true);
  }, []);

  const onCloseBottomSheet = React.useCallback(() => {
    setOpen(false);
  }, []);

  const onClick = React.useCallback(async (item: any, event: MouseEvent) => {
    if (!isEnvironment('browser')) return;

    clearTimeout(refs.copyTimeout.current);

    const values: any = {
      name: refs.name.current !== undefined ? refs.name.current : window.document.title,
      description: refs.description.current !== undefined ? refs.description.current : '',
      url: refs.url.current !== undefined ? refs.url.current : window.location.href
    };

    const valuesEncoded: any = {};

    values['name-with-url'] = `${values.name}\n\n${values.url}`;

    Object.keys(values).forEach((item_: any) => (valuesEncoded as any)[item_] = encodeURIComponent((values as any)[item_]));

    const popupCenter = (valuesWindow = { width: 700, height: 700 }) => {
      const width = clamp(valuesWindow.width, 240, window.innerWidth);
      const height = clamp(valuesWindow.height, 240, window.screen.height);

      const top = Math.round((window.screen.height - height) / 2);

      const left = Math.round((window.innerWidth - width) / 2);

      return `
          popup=yes,
          scrollbars=yes,
          width=${width},
          height=${height},
          top=${top},
          left=${left}
        `;
    };

    let link: any;

    const itemName = item.name.toLowerCase();

    if (itemName === 'facebook') link = `https://www.facebook.com/share.php?u=${valuesEncoded.url}&title=${valuesEncoded.name}`;
    else if (itemName === 'x') link = `https://x.com/intent/tweet?text=${valuesEncoded['name-with-url']}`;
    else if (itemName === 'linkedin') link = `https://www.linkedin.com/shareArticle?mini=true&url=${valuesEncoded.url}&title=${valuesEncoded.name}&source=${valuesEncoded.url}`;
    else if (itemName === 'pinterest') link = `https://pinterest.com/pin/create/button?url=${valuesEncoded.url}&media=&description=${valuesEncoded.description}`;
    else if (itemName === 'reddit') link = `https://www.reddit.com/submit?url=${valuesEncoded.url}&title=${valuesEncoded.name}`;
    else if (itemName === 'whatsapp') link = `https://api.whatsapp.com/send?text=${valuesEncoded.name}: ${valuesEncoded.url}`;
    else if (itemName === 'viber') link = `viber://forward?text=${valuesEncoded.name}: ${valuesEncoded.url}`;
    else if (itemName === 'email') {
      link = `mailto:?&subject=${valuesEncoded.name}&cc=&bcc=&body=${valuesEncoded['name-with-url']}`;

      window.open(link);
    }
    else if (itemName === 'copy') {
      await copyToClipboard(values.url);

      setCopied(true);

      refs.copyTimeout.current = setTimeout(() => {
        setCopied(false);
      }, 1400);
    }
    else if (itemName === 'print') {
      window.print();
    }

    if (!['email', 'copy', 'print'].includes(itemName)) {
      if (refs.openIn.current === 'new-window') window.open(link, '_blank', popupCenter());
      else if (refs.openIn.current === 'new-tab') window.open(link, '_blank')?.focus();
    }

    if (is('function', refs.onOpen.current)) refs.onOpen.current!(item, event);
  }, []);

  const size = props.size !== undefined ? props.size : mobile ? 'small' : 'regular';

  const options: any = [
    { name: l('Facebook'), Icon: IconFacebook, color: '#316FF6' },
    { name: l('X'), Icon: IconX, color: '#000000' },
    { name: l('Linkedin'), Icon: IconLinkedin, color: '#0077b5' },
    { name: l('Pinterest'), Icon: IconPinterest, color: '#bd081c' },
    { name: l('Reddit'), Icon: IconReddit, color: '#ff4500' },
    { name: l('Whatsapp'), Icon: IconWhatsapp, color: '#25d366' },
    { name: l('Viber'), Icon: IconViber, color: '#7360f2' },
    { name: l('Email'), Icon: IconEmail, title: 'Send email', color: theme.palette.color.info[50] },
    { name: l('Copy'), Icon: IconCopy, title: 'Copy', color: theme.palette.color.secondary[50] },
    { name: l('Print'), Icon: IconPrint, title: 'Print', color: theme.palette.color.neutral[70] }
  ];

  const optionMore = { name: l('More'), Icon: IconMore, title: l('More'), color: theme.palette.color.quaternary[40] };

  const exclude = [...(exclude_ || [])];

  if (!mobile) exclude.push('whatsapp', 'viber');

  let allowedOptions = [...options];

  if (include) allowedOptions = allowedOptions.filter(item => include.map(item_ => item_?.toLowerCase()).includes(item.name.toLowerCase()));

  if (exclude) allowedOptions = allowedOptions.filter(item => !exclude.map(item_ => item_?.toLowerCase()).includes(item.name.toLowerCase()));

  let visibleOptions = allowedOptions;

  if (order) {
    visibleOptions = visibleOptions.map((item, index) => {
      const orderIndex = order.findIndex(item_ => item.name.toLowerCase() === item_?.toLowerCase());

      item.order = orderIndex > -1 ? orderIndex : (1e4 + index);

      return item;
    });

    visibleOptions.sort((a, b) => a.order - b.order);
  }

  if (visible) visibleOptions = visibleOptions.filter(item => visible.map(item_ => item_?.toLowerCase()).includes(item.name.toLowerCase()));

  const moreOptions = version === 'menu-items' ? [...allowedOptions] : allowedOptions.filter(item => !visibleOptions.find(item_ => item.name === item_.name));

  if (['top', 'bottom'].includes(position)) other.direction = other.direction || 'row';

  const menuItemsMoreOptions = moreOptions
    .map(item => ({
      value: item,

      start: (
        <item.Icon
          color={item.color}

          size='small'
        />
      ),

      startAlign: 'center',

      primary: (
        <Type
          version='b3'
        >
          {item.name}
        </Type>
      )
    }))
    .map((item, index) => (
      <MenuItem
        key={index}

        onClick={(event: MouseEvent) => onClick(item.value, event)}

        noBackground

        menuCloseOnClick

        button

        {...item}

        {...itemProps?.(item, index)}

        {...MenuItemProps}
      />
    ));

  if (version === 'menu-items') return menuItemsMoreOptions;

  const AppendProps: any = {};

  if (position === 'start') AppendProps.position = 'right';

  if (position === 'end') AppendProps.position = 'left';

  if (position === 'top') AppendProps.position = 'bottom';

  if (position === 'bottom') AppendProps.position = 'top';

  return (
    <Line
      ref={ref}

      gap={0}

      className={classNames([
        staticClassName('Share', theme) && [
          `onesy-Share-root`,
          `onesy-Share-version-${version}`,
          `onesy-Share-size-${size}`
        ],

        classes.root,
        classes[`version_${version}`],
        ['fixed', 'absolute'].includes(version) && classes[`position_${position}`]
      ])}

      {...other}
    >
      {[...(start || []), ...visibleOptions, ...(end || [])].map((item: any, index: number) => {
        const itemProps_: any = {
          onClick: (event: MouseEvent) => onClick(item, event)
        };

        if (is('function', render)) return render!(item.name, itemProps_);

        return (
          <Tooltip
            label={(item.name === l('Copy') && copied) ? l('Copied!') : item.title || `${l('Share to')} ${item.name}`}

            {...AppendProps}
          >
            <Line
              key={index}

              onClick={(event: MouseEvent) => onClick(item, event)}

              {...itemProps_}

              className={classNames([
                staticClassName('Share', theme) && [
                  'onesy-Share-item',
                  'onesy-Share-visible',
                ],

                itemProps_?.className,
                classes.item,
                classes[`item_size_${size}`]
              ])}

              style={{
                color: theme.methods.palette.color.text(item.color),
                backgroundColor: item.color,

                ...itemProps_?.style
              }}
            >
              <Interaction />

              <item.Icon
                size='regular'
              />
            </Line>
          </Tooltip>
        );
      })}

      {!!moreOptions?.length && !mobile && (
        <Menu
          menuItems={[
            ...(startMore || []),

            ...menuItemsMoreOptions,

            ...(endMore || [])
          ]}

          alignment='start'

          {...AppendProps}

          ListProps={{
            size: 'small',

            style: {
              maxHeight: 240,
              overflowY: 'auto'
            }
          }}
        >
          <Line>
            <Tooltip
              name={optionMore.title || l('More')}

              {...AppendProps}
            >
              <Line
                className={classNames([
                  staticClassName('Share', theme) && [
                    'onesy-Share-item',
                    'onesy-Share-visible',
                  ],

                  classes.item,
                  classes[`item_size_${size}`]
                ])}

                style={{
                  color: theme.methods.palette.color.text(optionMore.color),
                  backgroundColor: optionMore.color
                }}
              >
                <Interaction />

                <optionMore.Icon
                  size='regular'
                />
              </Line>
            </Tooltip>
          </Line>
        </Menu>
      )}

      {!!moreOptions?.length && mobile && (
        <Tooltip
          name={optionMore.title || l('More')}

          {...AppendProps}
        >
          <Line
            onClick={onOpenBottomSheet}

            className={classNames([
              'onesy-Share-item',
              'onesy-Share-visible',
              classes.item,
              classes[`item_size_${size}`]
            ])}

            style={{
              color: theme.methods.palette.color.text(optionMore.color),
              backgroundColor: optionMore.color
            }}
          >
            <Interaction />

            <optionMore.Icon
              size='regular'
            />
          </Line>
        </Tooltip>
      )}

      <BottomSheet
        open={open}

        onClose={onCloseBottomSheet}
      >
        <List
          menu

          noBackground

          SurfaceProps={{
            elevation: false
          }}
        >
          {menuItemsMoreOptions}
        </List>
      </BottomSheet>
    </Line>
  );
});

Share.displayName = 'onesy-Share';

export default Share;
