import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialExpandMore from '@onesy/icons-material-rounded-react/IconMaterialExpandMoreW100';

import SurfaceElement from '../Surface';
import FadeElement from '../Fade';
import ExpandElement from '../Expand';
import IconButtonElement from '../IconButton';
import GridElement from '../Grid';
import LineElement from '../Line';
import TypeElement from '../Type';
import { ITransition, TTransitionStatus } from '../Transition';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { IElement, IElementReference, IElevation, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    transition: theme.methods.transitions.make(['margin', 'boxShadow']),
    width: '100%',

    '&:first-of-type': {
      marginTop: '0px',
      borderTopLeftRadius: `${theme.shape.radius.unit / 2}px`,
      borderTopRightRadius: `${theme.shape.radius.unit / 2}px`
    },

    '&:last-of-type': {
      marginBottom: '0px',
      borderBottomLeftRadius: `${theme.shape.radius.unit / 2}px`,
      borderBottomRightRadius: `${theme.shape.radius.unit / 2}px`
    }
  },

  expanded_margin_vertical_start: { marginBlockStart: '16px' },

  expanded_margin_vertical_both: { marginBlock: '16px' },

  expanded_margin_vertical_end: { marginBlockEnd: '16px' },

  expanded_margin_vertical_none: { marginBlock: '0px' },

  wrapperHeader: {
    cursor: 'pointer',
    transition: theme.methods.transitions.make('padding'),
    userSelect: 'none'
  },

  header: {},

  expanded_header_padding_vertical_start: { paddingBlockStart: `${theme.methods.space.value(2, 'px')} !important` },

  expanded_header_padding_vertical_both: { paddingBlock: `${theme.methods.space.value(2, 'px')} !important` },

  expanded_header_padding_vertical_end: { paddingBlockEnd: `${theme.methods.space.value(2, 'px')} !important` },

  expanded_header_padding_vertical_none: { paddingBlock: '0px !important' },

  header_padding_vertical_start: { paddingBlockStart: theme.methods.space.value(1, 'px') },

  header_padding_vertical_both: { paddingBlock: theme.methods.space.value(1, 'px') },

  header_padding_vertical_end: { paddingBlockEnd: theme.methods.space.value(1, 'px') },

  header_padding_vertical_none: { paddingBlock: '0px' },

  header_padding_horizontal_start: { paddingInlineStart: theme.methods.space.value(2, 'px') },

  header_padding_horizontal_both: { paddingInline: theme.methods.space.value(2, 'px') },

  header_padding_horizontal_end: { paddingInlineEnd: theme.methods.space.value(2, 'px') },

  header_padding_horizontal_none: { paddingInline: '0px' },

  main: {
    width: '100%'
  },

  main_padding_vertical_start: { paddingBlockStart: theme.methods.space.value(2, 'px') },

  main_padding_vertical_both: { paddingBlock: theme.methods.space.value(2, 'px') },

  main_padding_vertical_end: { paddingBlockEnd: theme.methods.space.value(2, 'px') },

  main_padding_vertical_none: { paddingBlock: '0px' },

  main_padding_horizontal_start: { paddingInlineStart: theme.methods.space.value(2, 'px') },

  main_padding_horizontal_both: { paddingInline: theme.methods.space.value(2, 'px') },

  main_padding_horizontal_end: { paddingInlineEnd: theme.methods.space.value(2, 'px') },

  main_padding_horizontal_none: { paddingInline: '0px' },

  secondary: {
    opacity: theme.palette.visual_contrast.default.opacity.primary
  },

  icon: {
    transition: theme.methods.transitions.make('transform')
  },

  icon_open: {
    transform: 'rotate(-180deg)'
  },

  iconButton: {
    flex: '0 0 auto'
  },

  noBackground: {
    '&.onesy-Surface-root': {
      background: 'transparent'
    }
  },

  disabled: {
    cursor: 'pointer',
    pointerEvents: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  }
}), { name: 'onesy-Accordion' });

type TPadding = 'start' | 'end' | 'both' | 'none';

export type IAccordion = Omit<ISurface, 'onChange'> & {
  elevation?: IElevation;

  primary?: IElement;
  secondary?: IElement;

  start?: any;
  end?: any;

  openDefault?: boolean;
  open?: boolean;
  onChange?: (open: boolean) => any;

  noBackground?: boolean;
  noExpandButton?: boolean;
  expandedMarginVertical?: TPadding;
  expandedHeaderPaddingVertical?: TPadding;
  headerPaddingVertical?: TPadding;
  headerPaddingHorizontal?: TPadding;
  mainPaddingVertical?: TPadding;
  mainPaddingHorizontal?: TPadding;
  noExpand?: boolean;
  noTransition?: boolean;

  ExpandProps?: IPropsAny;
  TransitionComponentProps?: IPropsAny;
  WrapperHeaderProps?: IPropsAny;
  HeaderProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  StartProps?: IPropsAny;
  EndProps?: IPropsAny;

  ExpandIcon?: IElementReference;
  TransitionComponent?: IElementReference;
};

const AccordionDelays = {
  Transition: {
    enter: 70
  }
};

const Accordion: React.FC<IAccordion> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyAccordion?.props?.default, ...props_ };

  // Why
  // By providing option for a theme to override an entire element
  // with a value stored in elements
  // we can override entire element's content
  // not just customize an element using css
  const Surface = theme?.elements?.Surface || SurfaceElement;

  const Fade = theme?.elements?.Fade || FadeElement;

  const Expand = theme?.elements?.Expand || ExpandElement;

  const IconButton = theme?.elements?.IconButton || IconButtonElement;

  const Grid = theme?.elements?.Grid || GridElement;

  const Line = theme?.elements?.Line || LineElement;

  const Type = theme?.elements?.Type || TypeElement;

  const {
    tonal = true,
    color = 'primary',
    elevation = 0,

    primary,
    secondary,

    start,
    end,

    openDefault,
    open: open_,
    onChange,

    noBackground,
    noExpandButton,
    expandedMarginVertical = 'both',
    expandedHeaderPaddingVertical = 'both',
    headerPaddingVertical = 'both',
    headerPaddingHorizontal = 'both',
    mainPaddingVertical = 'both',
    mainPaddingHorizontal = 'both',
    noExpand,
    noTransition,
    disabled,

    ExpandIcon = IconMaterialExpandMore,
    TransitionComponent: TransitionComponent_ = Fade,

    Component = 'div',

    ExpandProps,
    TransitionComponentProps: TransitionComponentProps_,
    WrapperHeaderProps,
    HeaderProps,
    IconButtonProps,
    StartProps,
    EndProps,

    className,

    children,

    ...other
  } = props;

  const [open, setOpen] = React.useState(openDefault !== undefined ? openDefault : open_);
  const [parent, setParent] = React.useState();

  const refs = {
    root: React.useRef<any>(undefined),
    ids: {
      button: React.useId(),
      data: React.useId()
    },
    expandInProgress: React.useRef<boolean>(null)
  };

  const { classes } = useStyle();

  let TransitionComponent = TransitionComponent_;

  let TransitionComponentProps: ITransition = {
    add: true,

    delay: {
      enter: AccordionDelays.Transition.enter
    },

    ...TransitionComponentProps_
  };

  React.useEffect(() => {
    if (open_ !== undefined && open_ !== open) setOpen(open_);
  }, [open_, open]);

  const onClick = () => {
    if (refs.expandInProgress.current) return;

    if (!disabled) {
      const valueNew = !open;

      // Update inner or controlled
      if (!props.hasOwnProperty('open')) setOpen(valueNew);

      if (is('function', onChange)) onChange(valueNew);
    }
  };

  if (!noTransition) TransitionComponentProps.in = open;
  else {
    TransitionComponent = React.Fragment;
    TransitionComponentProps = {};
  }

  const main = (
    <Line
      className={classNames([
        staticClassName('Accordion', theme) && [
          'onesy-Accordion-main'
        ],

        classes.main,
        classes[`main_padding_vertical_${mainPaddingVertical}`],
        classes[`main_padding_horizontal_${mainPaddingHorizontal}`],
      ])}
    >
      {children}
    </Line>
  );

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else if (ref?.current) ref.current = item;
        }

        refs.root.current = item;

        setParent(item);
      }}

      tonal={tonal}

      color={color}

      elevation={elevation}

      Component={Component}

      className={classNames([
        staticClassName('Accordion', theme) && [
          'onesy-Accordion-root',
          disabled && `onesy-Accordion-disabled`
        ],

        className,
        classes.root,
        open && classes[`expanded_margin_vertical_${expandedMarginVertical}`],
        noBackground && classes.noBackground,
        disabled && classes.disabled
      ])}

      {...other}
    >
      <Line
        gap={3}

        direction='row'

        align='center'

        onClick={onClick}

        {...WrapperHeaderProps}

        className={classNames([
          staticClassName('Accordion', theme) && [
            'onesy-Accordion-wrapper-header'
          ],

          WrapperHeaderProps?.className,
          classes.wrapperHeader,
          classes[`header_padding_vertical_${headerPaddingVertical}`],
          classes[`header_padding_horizontal_${headerPaddingHorizontal}`],
          open && [
            classes[`expanded_header_padding_vertical_${expandedHeaderPaddingVertical}`]
          ]
        ])}
      >
        {start}

        <Grid
          gap={{
            default: 3,
            700: 0.5
          }}

          direction={{
            default: 'row',
            700: 'column'
          }}

          {...HeaderProps}

          className={classNames([
            staticClassName('Accordion', theme) && [
              'onesy-Accordion-header'
            ],

            HeaderProps?.className,
            classes.header
          ])}
        >
          <Grid
            values={{ sm: !secondary ? 12 : 3 } as any}
          >
            {is('simple', primary) ? (
              <Type
                version='b1'

                className={classNames([
                  staticClassName('Accordion', theme) && [
                    'onesy-Accordion-primary'
                  ],

                  classes.primary
                ])}
              >
                {primary}
              </Type>
            ) : (
              React.Children.toArray(primary)
                .filter(Boolean)
                .map((item: any, index: number) => {
                  if (is('simple', item)) return item;

                  return (
                    React.cloneElement(item, {
                      key: index
                    })
                  );
                })
            )}
          </Grid>

          {secondary && (
            <Grid
              values={{ sm: 7 } as any}
            >
              {is('simple', secondary) ? (
                <Type
                  version='b1'

                  className={classNames([
                    staticClassName('Accordion', theme) && [
                      'onesy-Accordion-secondary'
                    ],

                    classes.secondary
                  ])}
                >
                  {secondary}
                </Type>
              ) : (
                React.Children.toArray(secondary)
                  .filter(Boolean)
                  .map((item: any, index: number) => {
                    if (is('simple', item)) return item;

                    return (
                      React.cloneElement(item, {
                        key: index
                      })
                    );
                  })
              )}
            </Grid>
          )}
        </Grid>

        <Line
          gap={0}

          direction='row'

          align='center'

          {...EndProps}
        >
          {end}

          {!noExpandButton && (
            <IconButton
              color='inherit'

              aria-label={primary || secondary}

              aria-controls={refs.ids.data}

              aria-expanded={open}

              id={refs.ids.button}

              {...IconButtonProps}

              className={classNames([
                staticClassName('Accordion', theme) && [
                  'onesy-Accordion-icon-button'
                ],

                IconButtonProps?.className,
                classes.iconButton
              ])}
            >
              <ExpandIcon
                className={classNames([
                  classes.icon,
                  open && classes.icon_open
                ])}
              />
            </IconButton>
          )}
        </Line>
      </Line>

      {noExpand ? <>
        {open && main}
      </> : (
        <Expand
          in={open}

          parent={parent}

          onTransition={(element: any, status: TTransitionStatus) => {
            refs.expandInProgress.current = !['appended', 'entered', 'exited', 'removed'].includes(status);
          }}

          role='region'

          aria-labelledby={refs.ids.button}

          id={refs.ids.data}

          {...ExpandProps}
        >
          <TransitionComponent
            {...TransitionComponentProps}
          >
            {main}
          </TransitionComponent>
        </Expand>
      )}
    </Surface>
  );
});

Accordion.displayName = 'onesy-Accordion';

export default Accordion;
