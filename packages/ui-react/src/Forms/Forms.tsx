import React from 'react';

import { style as styleMethod, classNames, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-Forms' });

export interface IForms extends ILine {
  divider?: boolean;
}

const Forms: React.FC<IForms> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyForms?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const {
    divider,

    Component = Line,

    className,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const children = React.Children.toArray(children_);

  return (
    <Component
      ref={ref}

      gap={4}

      direction='column'

      justify='unset'

      align='unset'

      fullWidth

      className={classNames([
        staticClassName('Forms', theme) && [
          'onesy-Forms-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children.map((form: any, index: number) => React.cloneElement(form, {
        key: index,

        divider: index < children.length - 1
      }))}
    </Component>
  );
});

Forms.displayName = 'onesy-Forms';

export default Forms;
