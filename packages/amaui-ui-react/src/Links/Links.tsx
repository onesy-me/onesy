import React from 'react';

import { textToInnerHTML } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import IconMaterialShare from '@amaui/icons-material-rounded-react/IconMaterialShareW100';
import IconMaterialMoreVert from '@amaui/icons-material-rounded-react/IconMaterialMoreVertW100';

import SectionElement from '../Section';
import MenuElement from '../Menu';
import ShareElement from '../Share';
import LineElement from '../Line';
import TypeElement from '../Type';
import ButtonElement from '../Button';
import MenuItemElement from '../MenuItem';
import IconButtonElement from '../IconButton';
import { useConfirm } from '../Confirm';
import { staticClassName } from '../utils';
import { IBaseElement, IMediaObject } from '../types';

const useStyle = style(theme => ({
  root: {
    padding: `${theme.methods.space.value(5, 'px')} ${theme.methods.space.value(3, 'px')}`
  },

  wrapper: {
    maxWidth: '1024px'
  },

  profile: {
    width: '140px',
    height: '140px',
    borderRadius: theme.methods.shape.radius.value(40, 'px'),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: `4px solid ${theme.palette.light ? theme.palette.color.primary[99] : theme.palette.color.primary[5]}`,
    cursor: 'default',
    userSelect: 'none'
  },

  cover: {
    height: '100vh',
    maxHeight: '274px',
    borderRadius: theme.methods.shape.radius.value(5, 'px'),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    cursor: 'default',
    userSelect: 'none'
  },

  name: {
    wordBreak: 'break-word'
  },

  summary: {
    wordBreak: 'break-word',
    maxWidth: '540px'
  },

  links: {
    marginTop: '40px',
    padding: `0 ${theme.methods.space.value(3, 'px')}`
  },

  linkWrapper: {
    maxWidth: '740px'
  },

  link: {
    '&.amaui-Button-root': {
      whiteSpace: 'normal',
      wordBreak: 'break-word',
      flex: '1 1 auto !important'
    }
  },

  more: {
    flex: '0 0 auto'
  }
}), { name: 'amaui-Links' });

export interface ILinksItem {
  version?: 'primary' | 'secondary' | 'default';

  name?: any;

  url?: string;

  sensitivity?: string | boolean;

  share?: boolean;

  props?: any;
}

export interface ILinks extends IBaseElement {
  name?: any;

  short_description?: any;

  links?: ILinksItem[];

  cover?: IMediaObject;

  profile?: IMediaObject;

  share?: boolean;

  start?: any;
  end?: any;

  IconMore?: any;
  IconShare?: any;

  ShareProps?: any;
  ItemShareProps?: any;
  IconButtonProps?: any;
  IconProps?: any;
}

const Element: React.FC<ILinks> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiLinks?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const Share = React.useMemo(() => theme?.elements?.Share || ShareElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const MenuItem = React.useMemo(() => theme?.elements?.MenuItem || MenuItemElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const { classes } = useStyle();

  const {
    name,

    short_description,

    cover,

    profile,

    links,

    share = true,

    start,
    end,

    IconMore = IconMaterialMoreVert,
    IconShare = IconMaterialShare,

    ShareProps,
    ItemShareProps,
    IconButtonProps,
    IconProps,

    className,

    ...other
  } = props;

  const confirm = useConfirm();

  const onOpenLink = React.useCallback(async (item: ILinksItem): Promise<any> => {
    const confirmed = (item.sensitivity && !['none'].includes(item.sensitivity as any)) ? await confirm.open({
      name: 'Sensitive URL',
      description: `This is URL might contain sensitive information, confirm you are 18+ to continue.`
    }) : true;

    if (confirmed) {
      window.open(item.url, 'blank');
    }
  }, []);

  return (
    <Section
      ref={ref}

      gap={2}

      align='center'

      maxWidth={false}

      padding={false}

      fullWidth

      className={classNames([
        staticClassName('Links', theme) && [
          'amaui-Links-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {start}

      <Line
        gap={1.4}

        fullWidth

        className={classes.wrapper}
      >
        {(profile || cover) && (
          <Line
            gap={0}

            align='center'

            fullWidth
          >
            {cover && (
              <Line
                fullWidth

                className={classes.cover}

                style={{
                  backgroundImage: `url('${cover?.url || cover?.urlSmall}')`
                }}
              />
            )}

            {profile && (
              <Line
                fullWidth

                className={classes.profile}

                style={{
                  marginTop: cover ? -71 : 0,
                  backgroundImage: `url('${profile?.urlSmall || profile?.url}')`
                }}
              />
            )}
          </Line>
        )}

        {(name || short_description) && (
          <Line
            gap={1}

            align='center'

            fullWidth
          >
            {name && (
              <Type
                version='h3'

                align='center'

                fullWidth

                dangerouslySetInnerHTML={{
                  __html: textToInnerHTML(name)
                }}

                className={classes.name}
              />
            )}

            {short_description && (
              <Type
                version='b2'

                align='center'

                fullWidth

                dangerouslySetInnerHTML={{
                  __html: textToInnerHTML(short_description)
                }}

                className={classes.summary}
              />
            )}
          </Line>
        )}

        {!!links?.length && (
          <Line
            gap={1.4}

            align='center'

            fullWidth

            className={classes.links}
          >
            {links.map((item: any, index: number) => (
              <Line
                key={index}

                gap={1}

                direction='row'

                align='center'

                justify='center'

                fullWidth

                className={classes.linkWrapper}
              >
                <Button
                  tonal

                  {...item.props}

                  version={[undefined, 'default'].includes(item.version) ? 'outlined' : 'filled'}

                  elevation={item.version === 'primary'}

                  color={item.version === 'primary' ? 'primary' : item.version === 'secondary' ? 'secondary' : 'default'}

                  fullWidth

                  onClick={() => onOpenLink(item)}

                  className={classNames([
                    `amaui-Links-link-version-${item.version}`,

                    item.props?.className,
                    classes.link
                  ])}
                >
                  {item.name || 'Link'}
                </Button>

                <Menu
                  menuItems={[
                    <MenuItem
                      start={(
                        <IconShare
                          size='small'

                          {...IconProps}
                        />
                      )}

                      startAlign='center'

                      primary={(
                        <Type
                          version='b3'
                        >
                          Share
                        </Type>
                      )}

                      menu={item.share ? (
                        <Share
                          version='menu-items'

                          name={item.name}

                          url={item.url}

                          exclude={['print']}

                          {...ItemShareProps}

                          ListItemProps={{
                            size: 'small',
                            noBackground: true,

                            ...ItemShareProps?.ListItemProps
                          }}
                        />
                      ) : undefined}

                      MenuProps={{
                        ListProps: {
                          noChildrenTransform: true
                        }
                      }}

                      size='small'

                      button

                      disabled={!item.share}
                    />
                  ]}
                >
                  <IconButton
                    size='regular'

                    disabled={!item.share}

                    {...IconButtonProps}

                    className={classNames([
                      staticClassName('Links', theme) && [
                        'amaui-Links-more'
                      ],

                      IconButtonProps?.className,
                      classes.more
                    ])}
                  >
                    <IconMore
                      size='large'

                      {...IconProps}
                    />
                  </IconButton>
                </Menu>
              </Line>
            ))}
          </Line>
        )}
      </Line>

      {share && (
        <Share
          {...ShareProps}
        />
      )}

      {end}
    </Section>
  );
});

Element.displayName = 'amaui-Links';

export default Element;
