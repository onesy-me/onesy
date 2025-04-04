import React from 'react';
import { useNavigate } from 'react-router-dom';

import { is, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import SectionElement from '../Section';
import TypeElement from '../Type';
import ButtonElement from '../Button';
import { ISection } from '../Section/Section';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },

  fullHeight: {
    height: '100vh'
  }
}), { name: 'onesy-NotFound' });

export type INotFound = ISection & {
  name?: any;

  href?: string;
  to?: string;
  link?: string;

  start?: any;
  end?: any;

  buttonText?: any;

  renderButton?: (props: any) => any;

  fullHeight?: any;

  ButtonProps?: any;
  TypeProps?: any;
};

const NotFound: React.FC<INotFound> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyNotFound?.props?.default, ...props_ }), [props_]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const {
    name = l('Page not found'),

    to = '/',

    link = '',

    renderButton,

    fullHeight,

    start,
    end,

    buttonText = l('Back'),

    ButtonProps,
    TypeProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const navigate = isEnvironment('browser') && useNavigate();

  const onTo = React.useCallback(() => {
    if (link) window.open(link, 'blank');
    else navigate(to);
  }, [to, link]);

  return (
    <Section
      ref={ref}

      flex

      fullWidth

      align='center'

      justify='center'

      className={classNames([
        staticClassName('NotFound', theme) && [
          `onesy-NotFound-root`
        ],

        className,
        classes.root,
        fullHeight && classes.fullHeight
      ])}

      {...other}
    >
      {start}

      <Type
        version='h3'

        align='center'

        {...TypeProps}

        className={classNames([
          staticClassName('NotFound', theme) && [
            `onesy-NotFound-type`
          ],

          TypeProps?.className
        ])}
      >
        {name}
      </Type>

      {is('function', renderButton) ? renderButton({}) : (
        <Button
          color='default'

          version='outlined'

          size='small'

          onClick={onTo}

          {...ButtonProps}

          className={classNames([
            staticClassName('NotFound', theme) && [
              `onesy-NotFound-button`
            ],

            ButtonProps?.className,
            classes.button
          ])}
        >
          {buttonText}
        </Button>
      )}

      {end}
    </Section>
  );
});

NotFound.displayName = 'onesy-NotFound';

export default NotFound;
