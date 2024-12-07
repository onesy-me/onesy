import React from 'react';

import { is, debounce, clamp, capitalize } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import IconMaterialMood from '@amaui/icons-material-rounded-react/IconMaterialMoodW100';
import IconMaterialEmojiNature from '@amaui/icons-material-rounded-react/IconMaterialEmojiNatureW100';
import IconMaterialEmojiFoodBeverage from '@amaui/icons-material-rounded-react/IconMaterialEmojiFoodBeverageW100';
import IconMaterialHiking from '@amaui/icons-material-rounded-react/IconMaterialHikingW100';
import IconMaterialEmojiTransportation from '@amaui/icons-material-rounded-react/IconMaterialEmojiTransportationW100';
import IconMaterialEmojiObjects from '@amaui/icons-material-rounded-react/IconMaterialEmojiObjectsW100';
import IconMaterialEmojiSymbols from '@amaui/icons-material-rounded-react/IconMaterialEmojiSymbolsW100';
import IconMaterialEmojiFlags from '@amaui/icons-material-rounded-react/IconMaterialEmojiFlagsW100';

import MenuElement, { IMenu } from '../Menu/Menu';
import LineElement from '../Line';
import SpyScrollElement from '../SpyScroll';
import ListElement from '../List';
import ListSubheaderElement from '../ListSubheader';
import TabsElement from '../Tabs';
import TextFieldElement from '../TextField';
import TabElement from '../Tab';
import TypeElement from '../Type';
import SurfaceElement from '../Surface';
import emojis_list from './emojis_list';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
  },

  wrapper: {
    height: '70vh',
    width: '70vw',
    borderRadius: theme.methods.shape.radius.value(2, 'px'),
    boxShadow: 'rgba(0, 0, 0, 0.07) 0px 4px 32px 0px',
    overflow: 'hidden'
  },

  size_small: {
    maxWidth: 276,
    maxHeight: 276
  },

  size_regular: {
    maxWidth: 340,
    maxHeight: 340
  },

  size_large: {
    maxWidth: 404,
    maxHeight: 404
  },

  main: {
    position: 'relative',
    height: 0,
    overflow: 'hidden auto'
  },

  header: {
    padding: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(1.5, 'px')} 0`
  },

  categories: {
    height: '100%',
    userSelect: 'none'
  },

  category: {
    paddingInlineStart: theme.methods.space.value(1.5, 'px')
  },

  emoji: {
    position: 'relative',
    textAlign: 'center',
    cursor: 'pointer',
    transition: theme.methods.transitions.make('transform'),

    '&$emoji_selected': {
      '&::before': {
        content: '""',
        position: 'absolute',
        width: 'calc(100% + 4px)',
        height: 'auto',
        aspectRatio: '1/1',
        background: theme.palette.background.default.tertiary,
        inset: '0',
        borderRadius: theme.methods.shape.radius.value(40, 'px'),
        zIndex: '0',
        left: '50%',
        transform: 'translate(-50%)',
        top: '-1px'
      }
    },

    '&:active': {
      transform: 'scale(0.94)'
    }
  },

  emoji_size_small: {
    fontSize: '1.5rem',
    width: 24
  },

  emoji_size_regular: {
    fontSize: '2rem',
    width: 32
  },

  emoji_size_large: {
    fontSize: '2.5rem',
    width: 40
  },

  unicode: {
    position: 'relative',
    zIndex: 1
  },

  subheader: {
    backdropFilter: 'blur(2px)',
    background: 'transparent',

    '&.amaui-ListSubheader-root': {
      zIndex: 14
    }
  },

  tabs: {
    '&.amaui-Tabs-root': {
      background: 'transparent'
    },

    '& .amaui-Tabs-tabs': {
      minWidth: '100%'
    }
  },

  tab: {
    '&.amaui-Tab-root': {
      minWidth: 'unset'
    }
  },

  tab_size_small: {
    '&.amaui-Tab-root': {
      padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(0.75, 'px')}`
    }
  },

  tab_size_regular: {
    '&.amaui-Tab-root': {
      padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(1.25, 'px')}`
    }
  },

  tab_size_large: {
    '&.amaui-Tab-root': {
      padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(1.25, 'px')}`
    }
  }
}), { name: 'amaui-Emojis' });

export interface IEmojiCategory {
  name: string;
  groups: string[];
  icon: any;
}

export interface IEmoji {
  alias: string | string[];
  unicode: string;
  category: string;
}

export interface IEmojis extends IMenu {
  emojis?: IEmoji[];

  categories?: IEmojiCategory[];

  selected?: string[];

  onSelect?: (value: IEmoji) => any;

  search?: boolean;

  tabs?: boolean;
}

const Emojis: React.FC<IEmojis> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiEmojis?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const List = React.useMemo(() => theme?.elements?.List || ListElement, [theme]);

  const ListSubheader = React.useMemo(() => theme?.elements?.ListSubheader || ListSubheaderElement, [theme]);

  const SpyScroll = React.useMemo(() => theme?.elements?.SpyScroll || SpyScrollElement, [theme]);

  const Tabs = React.useMemo(() => theme?.elements?.Tabs || TabsElement, [theme]);

  const TextField = React.useMemo(() => theme?.elements?.TextField || TextFieldElement, [theme]);

  const Tab = React.useMemo(() => theme?.elements?.Tab || TabElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const EMOJI_CATEGORIES = [
    {
      "name": "Smileys and People",
      "groups": ["Smiley", "Gesture", "Person", "Clothing"],
      "icon": <IconMaterialMood />
    },
    {
      "name": "Animals and Nature",
      "groups": ["Animal", "Nature"],
      "icon": <IconMaterialEmojiNature />
    },
    {
      "name": "Food and Drink",
      "groups": ["Food"],
      "icon": <IconMaterialEmojiFoodBeverage />
    },
    {
      "name": "Activity",
      "groups": ["Activity"],
      "icon": <IconMaterialHiking />
    },
    {
      "name": "Travel and Places",
      "groups": ["Travel"],
      "icon": <IconMaterialEmojiTransportation />
    },
    {
      "name": "Objects",
      "groups": ["Object"],
      "icon": <IconMaterialEmojiObjects />
    },
    {
      "name": "Symbols",
      "groups": ["Symbol"],
      "icon": <IconMaterialEmojiSymbols />
    },
    {
      "name": "Flags and Countries",
      "groups": ["Flag", "Country"],
      "icon": <IconMaterialEmojiFlags />
    }
  ];

  const {
    tonal = true,

    color = 'themed',

    label: label_,

    onSelect: onSelect_,

    emojis = emojis_list,

    categories = EMOJI_CATEGORIES,

    selected,

    size = 'regular',

    search: search_ = true,

    tabs: tabs_ = true,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [open, setOpen] = React.useState(false);
  const [openElement, setOpenElement] = React.useState<any>();
  const [search, setSearch] = React.useState<string>();
  const [tab, setTab] = React.useState(categories[0].name);

  const refs = {
    main: React.useRef<HTMLElement>(undefined)
  };

  const onOpen = React.useCallback(() => {
    setOpen(true);

    setTimeout(() => {
      setOpenElement(refs.main.current || null);
    }, 140);
  }, []);

  const onClose = React.useCallback(() => {
    setOpen(false);

    setTimeout(() => {
      setOpenElement(null);
    }, 140);
  }, []);

  const onSelect = React.useCallback((valueNew: IEmoji) => {
    if (is('function', onSelect_)) onSelect_!(valueNew);
  }, [onSelect_]);

  const emojisPerCategory = React.useMemo(() => {
    const value: Record<string, IEmoji[]> = {};

    if (is('array', categories)) {
      categories.forEach(item => {
        const groups: Record<string, IEmoji[]> = {};

        emojis.forEach(emoji => {
          const alias = ((is('array', emoji.alias) ? emoji.alias : [emoji.alias]) as any[]).join('').toLowerCase();

          if (item.groups.includes(emoji.category) && (!search || alias.includes(search.toLowerCase()))) {
            if (!groups[emoji.category]) groups[emoji.category] = [];

            groups[emoji.category].unshift(emoji as IEmoji);
          }
        });

        value[item.name] = [];

        item.groups.forEach(group => {
          if (!!groups[group]?.length) value[item.name].push(...groups[group]);
        });
      });

      Object.keys(value).forEach(item => {
        if (!value[item].length) delete value[item];
      });
    }

    return value;
  }, [search, emojis, categories]);

  const onChangeSearch = React.useCallback(debounce((valueNew: any) => {
    setSearch(valueNew);
  }, 140), []);

  const onChangeTabs = React.useCallback((valueNew: any) => {
    setTab(valueNew);
  }, []);

  const onActiveTab = React.useCallback((valueNew: any) => {
    setTab(valueNew.replace(/-/g, ' '));
  }, []);

  const onTabClick = React.useCallback((valueNew: any) => {
    const elements = Array.from(refs.main.current?.children || []) as HTMLElement[];

    if (!!elements.length) {
      const element = elements.find((item: HTMLElement) => item.dataset.amauiCategory === valueNew);

      if (element) {
        const top = element.offsetTop;
        const offset = -1;

        refs.main.current!.scroll({
          left: 0,
          top: clamp(top - offset, 0),
          behavior: 'smooth'
        });
      }
    }
  }, []);

  const categoriesUsed = Object.keys(emojisPerCategory);

  const categoryToID = (valueNew: any) => valueNew.replace(/ /g, '-');

  const categoriesUsedIDs = categoriesUsed.map(item => categoryToID(item));

  const tabs = categories.filter(item => categoriesUsed.some(item_ => item.name === item_)).map(item => ({
    name: item.icon,
    value: item.name
  }));

  const label = (
    <Line
      tonal={tonal}

      color={color}

      Component={Surface}

      className={classNames([
        classes.wrapper,
        classes[`size_${size}`]
      ])}
    >
      <SpyScroll
        ids={categoriesUsedIDs}

        parent={openElement}

        onActive={onActiveTab}
      >
        <Line
          gap={0}

          align='unset'

          justify='unset'

          fullWidth

          className={classes.categories}
        >
          {(search_ || tabs_) && (
            <Line
              gap={1}

              fullWidth

              className={classes.header}
            >
              {search_ && (
                <TextField
                  name='Search'

                  version='outlined'

                  onChange={onChangeSearch}

                  size={['small', 'regular'].includes(size) ? 'small' : 'regular'}

                  fullWidth

                  clear
                />
              )}

              {tabs_ && !!categoriesUsed.length && (
                <Tabs
                  valueDefault={tab}

                  value={tab}

                  onChange={onChangeTabs}

                  size='small'

                  initialLineUpdateTimeout={440}

                  noDivider

                  className={classes.tabs}
                >
                  {tabs.map((item, index) => (
                    <Tab
                      key={index}

                      value={item.value as any}

                      onClick={() => onTabClick(item.value)}

                      data-amaui-spy-scroll={categoryToID(item.value)}

                      className={classNames([
                        classes.tab,
                        classes[`tab_size_${size}`]
                      ])}
                    >
                      {React.cloneElement(item.name, {
                        size: ['small', 'regular'].includes(size) ? 'small' : 'regular'
                      })}
                    </Tab>
                  ))}
                </Tabs>
              )}
            </Line>
          )}

          <Line
            ref={refs.main}

            gap={0}

            flex

            fullWidth

            className={classes.main}
          >
            {categoriesUsed.map((item, index) => (
              <List
                key={index}

                gap={1}

                fullWidth

                SurfaceProps={{
                  id: categoryToID(item),
                  'data-amaui-category': item
                }}
              >
                <ListSubheader
                  className={classes.subheader}
                >
                  <Type
                    version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}
                  >
                    {item}
                  </Type>
                </ListSubheader>

                <Line
                  gap={1}

                  direction='row'

                  align='center'

                  wrap='wrap'

                  Component='li'

                  className={classes.category}
                >
                  {emojisPerCategory[item].map((emoji, index_) => (
                    <span
                      key={index_}

                      onClick={() => onSelect(emoji)}

                      title={capitalize(((is('array', emoji.alias) ? (emoji.alias as string[]).join(', ') : emoji.alias) as string).replace(/_/g, ' '))}

                      className={classNames([
                        classes.emoji,
                        classes[`emoji_size_${size}`],
                        selected?.includes(emoji.unicode) && classes.emoji_selected
                      ])}
                    >
                      <span
                        className={classes.unicode}
                      >
                        {emoji.unicode}
                      </span>
                    </span>
                  ))}
                </Line>
              </List>
            ))}
          </Line>
        </Line>
      </SpyScroll>
    </Line>
  );

  return (
    <Menu
      open={open}

      onOpen={onOpen}

      onClose={onClose}

      label={label}

      className={classNames([
        staticClassName('Emojis', theme) && [
          'amaui-Emojis-root',
          `amaui-Emojis-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

Emojis.displayName = 'amaui-Emojis';

export default Emojis;
