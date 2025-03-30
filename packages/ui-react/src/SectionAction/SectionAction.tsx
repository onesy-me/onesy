import React from 'react';
import { useNavigate } from 'react-router-dom';

import { is, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import SectionElement, { ISection } from '../Section/Section';
import ButtonElement from '../Button';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-SectionAction' });

export type ISectionAction = ISection & {
  text?: string;

  link?: string;

  to?: string;

  ButtonProps?: IPropsAny;
};

const Element: React.FC<ISectionAction> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySectionAction?.props?.default, ...props_ }), [props_]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const {
    size = 'regular',

    text,

    link,

    to,

    ButtonProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const navigate = isEnvironment('browser') && useNavigate();

  const refs = {
    root: React.useRef<any>(undefined)
  };

  return (
    <Section
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      className={classNames([
        staticClassName('SectionAction', theme) && [
          'onesy-SectionAction-root',
          `onesy-SectionAction-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Button
        tonal

        version='filled'

        size={size === 'large' ? 'regular' : size === 'regular' ? 'small' : 'small'}

        onClick={(to || link) ? () => to ? navigate(to) : window.open(link, 'blank') : undefined}

        {...ButtonProps}

        className={classNames([
          staticClassName('SectionAction', theme) && [
            'onesy-SectionAction-item-button'
          ],

          ButtonProps?.className,
          classes.button
        ])}
      >
        {text || 'Click here'}
      </Button>
    </Section>
  );
});

Element.displayName = 'onesy-SectionAction';

export default Element;
