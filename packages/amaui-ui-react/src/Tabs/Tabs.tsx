import React from 'react';

import { is, wait } from '@amaui/utils';
import { style as styleMethod, classNames, useAmauiTheme } from '@amaui/style-react';

import IconMaterialExpandLess from '@amaui/icons-material-rounded-react/IconMaterialExpandLessW100';
import IconMaterialExpandMore from '@amaui/icons-material-rounded-react/IconMaterialExpandMoreW100';
import IconMaterialNavigateNext from '@amaui/icons-material-rounded-react/IconMaterialNavigateNextW100';
import IconMaterialNavigateBefore from '@amaui/icons-material-rounded-react/IconMaterialNavigateBeforeW100';

import SurfaceElement from '../Surface';
import LineElement from '../Line';
import IconButtonElement from '../IconButton';
import DividerElement from '../Divider';
import useMediaQuery from '../useMediaQuery';
import { ISurface } from '../Surface/Surface';
import { TLineAlign, TLineJustify } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    flex: '0 0 auto'
  },

  size_small: {
    minHeight: '39px'
  },

  size_regular: {
    minHeight: '44px'
  },

  size_large: {
    minHeight: '62px'
  },

  tabs: {
    position: 'relative'
  },

  orientation_horizontal: {
    width: '100%'
  },

  tabs_orientation_horizontal: {
    height: '100%',
    overflowX: 'auto'
  },

  tabs_orientation_vertical: {
    width: '100%',
    overflowY: 'auto'
  },

  arrow: {
    flex: '0 0 auto',
    alignSelf: 'center',
    justifySelf: 'center',
    transition: theme.methods.transitions.make(['opacity'], { duration: 'xxs' }),

    '&[disabled]': {
      opacity: '0'
    }
  },

  line: {
    display: 'inline-block',
    position: 'absolute',
    background: 'currentColor',
    transition: theme.methods.transitions.make(['top', 'left', 'width']),
    zIndex: '1'
  },

  line_version_primary_size_small_orientation_horizontal: {
    height: '2px',
    bottom: '0',
    borderRadius: `${theme.methods.shape.radius.value(40, 'px')} ${theme.methods.shape.radius.value(40, 'px')} 0 0`
  },

  line_version_primary_size_regular_orientation_horizontal: {
    height: '3px',
    bottom: '0',
    borderRadius: `${theme.methods.shape.radius.value(40, 'px')} ${theme.methods.shape.radius.value(40, 'px')} 0 0`
  },

  line_version_primary_size_large_orientation_horizontal: {
    height: '4px',
    bottom: '0',
    borderRadius: `${theme.methods.shape.radius.value(40, 'px')} ${theme.methods.shape.radius.value(40, 'px')} 0 0`
  },

  line_version_primary_size_small_orientation_vertical: {
    width: '2px',
    insetInlineEnd: '0',
    borderRadius: `${theme.methods.shape.radius.value(40, 'px')} 0 0 ${theme.methods.shape.radius.value(40, 'px')}`
  },

  line_version_primary_size_regular_orientation_vertical: {
    width: '3px',
    insetInlineEnd: '0',
    borderRadius: `${theme.methods.shape.radius.value(40, 'px')} 0 0 ${theme.methods.shape.radius.value(40, 'px')}`
  },

  line_version_primary_size_large_orientation_vertical: {
    width: '4px',
    insetInlineEnd: '0',
    borderRadius: `${theme.methods.shape.radius.value(40, 'px')} 0 0 ${theme.methods.shape.radius.value(40, 'px')}`
  },

  line_version_secondary_size_small_orientation_horizontal: {
    height: '1px',
    bottom: '0'
  },

  line_version_secondary_size_regular_orientation_horizontal: {
    height: '2px',
    bottom: '0'
  },

  line_version_secondary_size_large_orientation_horizontal: {
    height: '3px',
    bottom: '0'
  },

  line_version_secondary_size_small_orientation_vertical: {
    width: '1px',
    insetInlineEnd: '0'
  },

  line_version_secondary_size_regular_orientation_vertical: {
    width: '2px',
    insetInlineEnd: '0'
  },

  line_version_secondary_size_large_orientation_vertical: {
    width: '3px',
    insetInlineEnd: '0'
  },

  divider: {
    position: 'absolute',

    '&.amaui-Divider-root': {
      margin: '0px',
      background: 'currentColor',
      opacity: '0.14',
      zIndex: '1'
    }
  },

  divider_orientation_horizontal: {
    '&.amaui-Divider-root': {
      left: '0',
      right: '0',
      bottom: '0'
    }
  },

  divider_orientation_vertical: {
    '&.amaui-Divider-root': {
      top: '0',
      bottom: '0',
      insetInlineEnd: '0'
    }
  },

  fixed: {
    position: 'fixed',
    top: '0',
    insetInline: '0'
  }
}), { name: 'amaui-Tabs' });

export interface ITabs extends Omit<ISurface, 'version'> {
  version?: 'primary' | 'secondary';

  value?: any;
  valueDefault?: any;
  onChange?: (value: any) => any;

  isActive?: (value: any, tabValue: any) => boolean;

  activateOnFocus?: boolean;

  align?: TLineAlign;
  justify?: TLineJustify;
  orientation?: 'vertical' | 'horizontal';

  size?: 'small' | 'regular' | 'large';

  initialLineUpdateTimeout?: number;

  arrows?: boolean;
  arrowsMobile?: boolean;
  fixed?: boolean;

  noDivider?: boolean;

  IconStart?: IElementReference;
  IconEnd?: IElementReference;

  IconTop?: IElementReference;
  IconBottom?: IElementReference;

  SurfaceProps?: IPropsAny;
}

const Tabs: React.FC<ITabs> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTabs?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Divider = React.useMemo(() => theme?.elements?.Divider || DividerElement, [theme]);

  const {
    tonal = true,
    color = 'primary',

    version = 'primary',

    value: value_ = 0,
    valueDefault,

    onChange: onChange_,

    isActive,

    activateOnFocus,

    align = 'flex-start',
    justify = 'flex-start',
    orientation = 'horizontal',

    size = 'regular',

    initialLineUpdateTimeout = 0,

    arrows,
    arrowsMobile,
    fixed,

    noDivider,

    IconStart = IconMaterialNavigateBefore,
    IconEnd = IconMaterialNavigateNext,

    IconTop = IconMaterialExpandLess,
    IconBottom = IconMaterialExpandMore,

    SurfaceProps,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const setMoveValue = React.useState<any>({})[1];
  const [init, setInit] = React.useState(false);
  const [lineValues, setLineValues] = React.useState<any>({});
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    root: React.useRef<any>(undefined),
    tabsRoot: React.useRef<any>(undefined),
    value: React.useRef<any>(undefined),
    props: React.useRef<any>(undefined),
    mobile: React.useRef<any>(undefined),
    version: React.useRef<any>(undefined),
    isActive: React.useRef<any>(undefined),
    initialLineUpdateTimeout: React.useRef<any>(undefined)
  };

  const mobile = useMediaQuery('(pointer: coarse)', { element: refs.root.current });

  refs.value.current = value;

  refs.props.current = props;

  refs.mobile.current = mobile;

  refs.version.current = version;

  refs.isActive.current = isActive;

  refs.initialLineUpdateTimeout.current = initialLineUpdateTimeout;

  React.useEffect(() => {
    // Update lineValues value
    // with the first tab
    // For elements within a modal
    // being transitioned, minor bug fix
    setTimeout(updateLine, refs.initialLineUpdateTimeout.current);

    const observerMethod = () => updateLine();

    // Mutation observer
    const observerMutation = new ResizeObserver(observerMethod);

    observerMutation.observe(refs.tabsRoot.current);

    // Update theme subscription method
    const method = () => updateLine();

    theme.subscriptions.update.subscribe(method);

    setInit(true);

    return () => {
      // Unsubscribe
      theme.subscriptions.update.unsubscribe(method);

      observerMutation.disconnect();
    };
  }, []);

  const onScroll = React.useCallback((event: React.EventHandler<any>) => {
    const useArrows_ = refs.props.current.arrows && (!refs.mobile.current || refs.props.current.arrowsMobile);

    if (useArrows_) {
      setMoveValue({
        left: refs.tabsRoot.current.scrollLeft,
        top: refs.tabsRoot.current.scrollTop,
      });
    }
  }, []);

  React.useEffect(() => {
    if (init) {
      if (value_ !== refs.value.current) {
        setValue(value_);

        // Update lineValues value
        updateLine();
      }
    }
  }, [value_]);

  const onChange = (valueItem: number, index: number) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('value')) {
      setValue(valueItem);

      // Update line
      updateLine();
    }

    if (is('function', onChange_)) onChange_(valueItem);
  };

  const move = (forward_ = true) => {
    const forward = theme.direction === 'ltr' || orientation === 'vertical' ? forward_ : !forward_;

    const rect = refs.tabsRoot.current.getBoundingClientRect();

    let moveValue_: any;

    if (orientation === 'horizontal') moveValue_ = {
      left: refs.tabsRoot.current.scrollLeft + (forward ? 1 : -1) * rect.width,
      behavior: 'smooth'
    };
    else moveValue_ = {
      top: refs.tabsRoot.current.scrollTop + (forward ? 1 : -1) * rect.height,
      behavior: 'smooth'
    };

    refs.tabsRoot.current.scrollTo(moveValue_);
  };

  const updateLine = async () => {
    await wait(40);

    const valueProp = refs.value.current;

    const tabs = Array.from((refs.tabsRoot.current as HTMLElement)?.querySelectorAll(`[data-amaui-tab-value]`) || []) as HTMLElement[];

    const tab: HTMLElement = tabs.find(item => is('function', refs.isActive.current) ? refs.isActive.current(valueProp, item.dataset.amauiTabValue) : String(item.dataset.amauiTabValue) === String(valueProp));

    if (tab) {
      const rect = {
        parent: refs.tabsRoot.current?.getBoundingClientRect(),
        tab: tab.getBoundingClientRect(),
        line: (refs.version.current === 'primary' ? tab.children[1] : tab)?.getBoundingClientRect()
      };

      // Update
      if (rect.parent && rect.line && rect.tab) {
        // Update left scroll
        if (orientation === 'horizontal') {
          if ((rect.tab.x < rect.parent.x) || (rect.parent.x + rect.parent.width < rect.tab.x + rect.tab.width)) {
            let left = refs.tabsRoot.current.scrollLeft;

            if (rect.tab.x < rect.parent.x) left += rect.tab.x - rect.parent.x;
            else left += (rect.tab.x + rect.tab.width) - (rect.parent.x + rect.parent.width);

            // Update
            refs.tabsRoot.current.scrollTo({ left, behavior: 'smooth' });
          }
        }
        else {
          if ((rect.tab.y < rect.parent.y) || (rect.parent.y + rect.parent.height < rect.tab.y + rect.tab.height)) {
            let top = refs.tabsRoot.current.scrollTop;

            if (rect.tab.y < rect.parent.y) top += rect.tab.y - rect.parent.y;
            else top += (rect.tab.y + rect.tab.height) - (rect.parent.y + rect.parent.height);

            // Update
            refs.tabsRoot.current.scrollTo({ top, behavior: 'smooth' });
          }
        }

        // Update lineValues value
        setLineValues({
          x: rect.line.x - rect.parent.x + refs.tabsRoot.current.scrollLeft,
          y: rect.line.y - rect.parent.y + refs.tabsRoot.current.scrollTop,
          width: rect.line.width,
          height: rect.line.height
        });
      }
    }
  };

  const direction = orientation === 'horizontal' ? 'row' : 'column';

  const propPosition = orientation === 'horizontal' ? 'left' : 'top';

  const propMain = orientation === 'horizontal' ? 'width' : 'height';

  const useArrows = arrows && (!mobile || arrowsMobile);

  const ArrowPre = (
    <IconButton
      color='inherit'

      onClick={() => move(false)}

      className={classNames([
        staticClassName('Tabs', theme) && [
          'amaui-Tabs-arrow'
        ],

        classes.arrow
      ])}

      disabled={refs.tabsRoot.current?.[orientation === 'horizontal' ? 'scrollLeft' : 'scrollTop'] === 0}
    >
      {orientation === 'horizontal' ? <IconStart /> : <IconTop />}
    </IconButton>
  );

  const ArrowPost = (
    <IconButton
      color='inherit'

      onClick={() => move()}

      className={classNames([
        staticClassName('Tabs', theme) && [
          'amaui-Tabs-arrow'
        ],

        classes.arrow
      ])}

      disabled={orientation === 'horizontal' ? Math.ceil(refs.tabsRoot.current?.clientWidth + refs.tabsRoot.current?.scrollLeft) === refs.tabsRoot.current?.scrollWidth : Math.ceil(refs.tabsRoot.current?.clientHeight + refs.tabsRoot.current?.scrollTop) === refs.tabsRoot.current?.scrollHeight}
    >
      {orientation === 'horizontal' ? <IconEnd /> : <IconBottom />}
    </IconButton>
  );

  const TabElements = React.Children.toArray(children).filter((item: any) => item?.type?.displayName?.endsWith('Tab'));

  const tabActive = TabElements.find((item: any, index: number) => {
    const valueItem = item.props.value !== undefined ? item.props.value : index;

    return is('function', refs.isActive.current) ? refs.isActive.current(value, valueItem) : value === valueItem;
  });

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      gap={0}

      direction={direction}

      align={align}

      justify={justify}

      role='tablist'

      aria-orientation={orientation}

      Component={Line as any}

      AdditionalProps={{
        Component
      }}

      {...SurfaceProps}

      className={classNames([
        staticClassName('Tabs', theme) && [
          'amaui-Tabs-root',
          `amaui-Tabs-version-${version}`,
          `amaui-Tabs-size-${size}`
        ],

        SurfaceProps?.className,
        className,
        classes.root,
        classes[`size_${size}`],
        classes[`orientation_${orientation}`],
        fixed && classes.fixed
      ])}

      {...other}
    >
      {useArrows && ArrowPre}

      {!noDivider && (
        <Divider
          tonal={tonal}

          color={color}

          orientation={orientation}

          className={classNames([
            staticClassName('Tabs', theme) && [
              'amaui-Tabs-divider'
            ],

            classes.divider,
            classes[`divider_orientation_${orientation}`]
          ])}
        />
      )}

      <Line
        ref={refs.tabsRoot}

        gap={0}

        direction={direction}

        align='flex-start'

        justify='flex-start'

        onScroll={onScroll}

        className={classNames([
          staticClassName('Tabs', theme) && [
            'amaui-Tabs-tabs'
          ],

          classes.tabs,
          classes[`tabs_orientation_${orientation}`]
        ])}
      >
        {tabActive && (
          <span
            className={classNames([
              staticClassName('Tabs', theme) && [
                'amaui-Tabs-line'
              ],

              classes.line,
              classes[`line_version_${version}_size_${size}_orientation_${orientation}`],
              orientation === 'vertical' && theme.direction === 'rtl' && classes[`line_version_${version}_orientation_vertical_rtl`]
            ])}

            style={{
              [propPosition]: orientation === 'horizontal' ? lineValues.x : lineValues.y,

              [propMain]: lineValues[propMain]
            }}
          />
        )}

        {TabElements.map((item: any, index: number) => {
          const valueItem = item.props.value !== undefined ? item.props.value : index;

          return (
            React.cloneElement(item, {
              tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

              color: item.props.color !== undefined ? item.props.color : color,

              version: item.props.version !== undefined ? item.props.version : version,

              value: item.props.value !== undefined ? item.props.value : index,

              size: item.props.size !== undefined ? item.props.size : size,

              index,

              onChange,

              activateOnFocus: item.props.activateOnFocus !== undefined ? item.props.activateOnFocus : activateOnFocus,

              active: is('function', refs.isActive.current) ? refs.isActive.current(value, valueItem) : value === valueItem,

              onClick: (event: React.MouseEvent<any>) => {
                onChange(valueItem, index);

                if (is('function', item.props.onClick)) item.props.onClick(event);
              }
            })
          );
        })}
      </Line>

      {useArrows && ArrowPost}
    </Surface>
  );
});

Tabs.displayName = 'amaui-Tabs';

export default Tabs;
