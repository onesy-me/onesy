import React from 'react';

import { isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialSmartphone from '@onesy/icons-material-rounded-react/IconMaterialSmartphoneW100';
import IconMaterialTabletMac from '@onesy/icons-material-rounded-react/IconMaterialTabletMacW100';
import IconMaterialComputer from '@onesy/icons-material-rounded-react/IconMaterialComputerW100';
import IconMaterialDesktopWindows from '@onesy/icons-material-rounded-react/IconMaterialDesktopWindowsW100';

import IconButtonElement from '../IconButton';
import LineElement from '../Line';
import TooltipElement from '../Tooltip';
import IFrameElement_ from '../IFrame';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden'
  },

  options: {
    overflowX: 'auto',
    overflowY: 'hidden',
    padding: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(3, 'px')}`,

    '& > *': {
      flex: '0 0 auto'
    }
  },

  wrapper: {
    margin: '0 4px 24px',
    minHeight: '15vh',
    height: 0,
    border: `0.5px solid ${theme.palette.text.divider}`,
    borderRadius: theme.methods.shape.radius.value(2),
    boxShadow: theme.shadows.values.default[1],
    overflow: 'hidden',

    '&.onesy-Line-root': {
      width: 'calc(100% - 8px)'
    }
  },

  IFrame: {
    position: 'relative'
  },

  iframe: {
    width: '100%',
    height: '100%'
  }
}), { name: 'onesy-Frame' });

export type IFrame = ILine & {
  url?: string;
  src?: string;

  value?: any;

  startOptions?: any;
  endOptions?: any;

  IconMobile?: any;
  IconTablet?: any;
  IconLaptop?: any;
  IconDesktop?: any;

  iframeProps?: any;
  IFrameProps?: any;
  OptionProps?: any;
  OptionsProps?: any;
  OptionsWrapperProps?: any;
  WrapperProps?: any;
};

const Frame: React.FC<IFrame> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyFrame?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const IconButton = theme?.elements?.IconButton || IconButtonElement;

  const Tooltip = theme?.elements?.Tooltip || TooltipElement;

  const IFrameElement = theme?.elements?.IFrame || IFrameElement_;

  const {
    url,
    src,

    value,

    startOptions,
    endOptions,

    IconMobile = IconMaterialSmartphone,
    IconTablet = IconMaterialTabletMac,
    IconLaptop = IconMaterialComputer,
    IconDesktop = IconMaterialDesktopWindows,

    iframeProps,
    IFrameProps,
    OptionProps,
    OptionsProps,
    OptionsWrapperProps,
    WrapperProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [responsive, setResponsive] = React.useState<any>();

  const onResponsive = (value_: any) => {
    setResponsive((previous: any) => {
      if (previous === value_) return '';

      return value_;
    });
  };

  const responsiveOptions = [
    { name: l('Mobile'), icon: IconMobile, disabled: isEnvironment('browser') && window.innerWidth < 375 },
    { name: l('Tablet'), icon: IconTablet, disabled: isEnvironment('browser') && window.innerWidth < 768 },
    { name: l('Laptop'), icon: IconLaptop, disabled: isEnvironment('browser') && window.innerWidth < 1440 },
    { name: l('Desktop'), icon: IconDesktop, disabled: isEnvironment('browser') && window.innerWidth < 1920 }
  ];

  const WrapperStyle: any = {};

  if (responsive) {
    // iphone SE
    if (responsive === 'Mobile') {
      WrapperStyle.maxWidth = 375;
      WrapperStyle.maxHeight = 667;
    }

    // ipad mini
    if (responsive === 'Tablet') {
      WrapperStyle.maxWidth = 768;
      WrapperStyle.maxHeight = 1024;
    }

    // laptop
    if (responsive === 'Laptop') {
      WrapperStyle.maxWidth = 1440;
      WrapperStyle.maxHeight = 768;
    }

    // desktop
    if (responsive === 'Desktop') {
      WrapperStyle.maxWidth = 1920;
      WrapperStyle.maxHeight = 1080;
    }
  }

  const main = React.useMemo(() => {

    return <>
      {children}

      {value && !children && (
        <IFrameElement
          className={classNames([
            classes.IFrame
          ])}

          WrapperProps={{
            align: 'center',
            justify: 'center'
          }}
        >
          {value || children}
        </IFrameElement>
      )}

      {(url || src) && !(value || children) && (
        <iframe
          title='frame'

          src={url || src}

          {...iframeProps}

          className={classNames([
            iframeProps?.className,
            classes.iframe
          ])}
        />
      )}
    </>;
  }, [url, src, value, children]);

  return (
    <Line
      ref={ref}

      gap={0}

      align='center'

      flex

      fullWidth

      className={classNames([
        staticClassName('Frame', theme) && [
          'onesy-Frame-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={0.5}

        direction='row'

        align='center'

        justify={{
          default: 'flex-end',
          700: 'flex-start'
        }}

        fullWidth

        {...OptionsWrapperProps}

        className={classNames([
          staticClassName('Frame', theme) && [
            'onesy-Frame-options-wrapper'
          ],

          OptionsWrapperProps?.className
        ])}
      >
        <Line
          gap={0.4}

          direction='row'

          align='center'

          justify='flex-end'

          {...OptionsProps}

          className={classNames([
            staticClassName('Frame', theme) && [
              'onesy-Frame-options'
            ],

            OptionsProps?.className,
            classes.options
          ])}
        >
          {startOptions}

          {responsiveOptions.map((item, index) => (
            <Tooltip
              key={index}

              name={item.name}
            >
              <IconButton
                size='small'

                selected={item.name === responsive}

                onClick={() => onResponsive(item.name)}

                disabled={item.disabled}

                {...OptionProps}

                className={classNames([
                  staticClassName('Frame', theme) && [
                    'onesy-Frame-option'
                  ],

                  OptionProps?.className
                ])}
              >
                <item.icon />
              </IconButton>
            </Tooltip>
          ))}

          {endOptions}
        </Line>
      </Line>

      <Line
        gap={0}

        align='center'

        flex

        fullWidth

        {...WrapperProps}

        className={classNames([
          staticClassName('Frame', theme) && [
            'onesy-Frame-wrapper'
          ],

          WrapperProps?.className,
          classes.wrapper
        ])}

        style={{
          ...WrapperStyle,
          ...WrapperProps?.style
        }}
      >
        {main}
      </Line>
    </Line>
  );
});

Frame.displayName = 'onesy-Frame';

export default Frame;
