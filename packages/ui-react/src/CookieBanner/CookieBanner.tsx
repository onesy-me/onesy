import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ButtonElement from '../Button';
import TypeElement from '../Type';
import SurfaceElement from '../Surface';
import SlideElement from '../Slide';
import LineElement from '../Line';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';
import { ISurface } from '../Surface/Surface';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    zIndex: theme.z_index.modal,
    boxShadow: '0px 4px 32px 0px rgba(0,0,0,0.014)'
  },

  size_small: {
    padding: '12px 16px'
  },

  size_regular: {
    padding: '20px 18px'
  },

  size_large: {
    padding: '28px 20px'
  },

  main: {
    maxWidth: '1100px'
  }
}), { name: 'onesy-CookieBanner' });

export type ICookieBanner = ISurface & {
  name?: any;

  description?: any;

  startActions?: any;

  endActions?: any;

  onReject?: () => any;

  onAllow?: () => any;

  in?: boolean;

  TransitionElement?: any;

  noTransition?: boolean;

  MainProps?: IPropsAny;

  NameProps?: IPropsAny;

  DescriptionProps?: IPropsAny;

  ButtonProps?: IPropsAny;

  RejectButtonProps?: IPropsAny;

  AllowButtonProps?: IPropsAny;

  TransitionProps?: IPropsAny;
};

const CookieBanner: React.FC<ICookieBanner> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyBanner?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Slide = theme?.elements?.Slide || SlideElement;

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const Type = theme?.elements?.Type || TypeElement;

  const Button = theme?.elements?.Button || ButtonElement;

  const {
    name,

    description,

    size = 'regular',

    startActions,

    endActions,

    onReject,

    onAllow,

    in: inProp,

    TransitionElement: TransitionElementProps = Slide,

    noTransition,

    MainProps,

    NameProps,

    DescriptionProps,

    ButtonProps,

    RejectButtonProps,

    AllowButtonProps,

    TransitionProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const TransitionElement = noTransition ? React.Fragment : TransitionElementProps;

  const WrapperProps = noTransition ? undefined : {
    ...TransitionProps,

    in: inProp
  };

  const buttonProps: any = {
    size,

    ...ButtonProps
  };

  return (
    <TransitionElement
      {...WrapperProps}
    >
      <Line
        ref={ref}

        gap={1.5}

        align='center'

        fullWidth

        Component={Surface}

        color='default'

        role='region'

        aria-label={l('Cookie Banner')}

        className={classNames([
          staticClassName('CookieBanner', theme) && [
            'onesy-CookieBanner-root',
            `onesy-CookieBanner-size-${size}`
          ],

          className,
          classes.root,
          classes[`size_${size}`]
        ])}

        {...other}
      >
        <Line
          gap={1.5}

          direction='row'

          wrap='wrap'

          align='center'

          justify='space-between'

          fullWidth

          {...MainProps}

          className={classNames([
            staticClassName('CookieBanner', theme) && [
              'onesy-CookieBanner-main'
            ],

            MainProps?.className,
            classes.main
          ])}
        >
          <Line
            gap={0.25}
          >
            {is('string', name) ? (
              <Type
                version={size === 'large' ? 't1' : size === 'regular' ? 't2' : 't3'}

                weight={500}

                {...NameProps}
              >
                {name}
              </Type>
            ) : name}

            {is('string', description) ? (
              <Type
                version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

                {...DescriptionProps}
              >
                {description}
              </Type>
            ) : description}
          </Line>

          <Line
            gap={1}

            direction='row'

            align='center'
          >
            {startActions}

            <Button
              onClick={onReject}

              color='default'

              {...buttonProps}

              {...RejectButtonProps}
            >
              {l('Reject All')}
            </Button>

            <Button
              onClick={onAllow}

              color='primary'

              version='filled'

              {...buttonProps}

              {...AllowButtonProps}
            >
              {l('Accept All')}
            </Button>

            {endActions}
          </Line>
        </Line>
      </Line>
    </TransitionElement>
  );
});

CookieBanner.displayName = 'onesy-CookieBanner';

export default CookieBanner;
