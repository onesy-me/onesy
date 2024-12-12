import React from 'react';

import { is } from '@onesy/utils';
import { style as styleMethod, classNames, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import TypeElement from '../Type';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElement } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  aside: {
    flex: '0 0 auto'
  },

  row: {
    '& > *': {
      flex: '1 1 auto'
    }

    // '& .onesy-TextField-root, & .onesy-TextField-wrapper': {
    //   width: '100%'
    // }
  },

  footer: {
    marginTop: '8px'
  }
}), { name: 'onesy-FormRow' });

export interface IFormRow extends ILine {
  name?: string | IElement;
  description?: string | IElement;

  start?: any;
  end?: any;

  row?: boolean;
  footer?: IElement;

  responsive?: boolean;

  HeaderProps?: any;
  MainProps?: any;
  TextProps?: any;
  AsideProps?: any;
  StartProps?: any;
  EndProps?: any;
}

const FormRow: React.FC<IFormRow> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyFormRow?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    name,
    description,

    start,
    end,

    row,
    footer,

    responsive = true,

    Component = Line,

    HeaderProps,
    MainProps,
    TextProps,
    AsideProps,
    StartProps,
    EndProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const text = (name || description);

  const actions = (start || end);

  const header = text || actions;

  let justify = 'unset';

  if (start && end && !text) justify = 'space-between';

  if (!start && !text && end) justify = 'flex-end';

  return (
    <Component
      ref={ref}

      gap={1}

      direction='column'

      justify='unset'

      align='unset'

      fullWidth

      className={classNames([
        staticClassName('FormRow', theme) && [
          'onesy-FormRow-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {header && (
        <Line
          direction='row'

          align='center'

          justify={justify}

          fullWidth

          {...HeaderProps}
        >
          {start && (
            <Line
              {...AsideProps}

              {...StartProps}

              className={classNames([
                AsideProps?.className,
                StartProps?.className,
                classes.aside
              ])}
            >
              {start}
            </Line>
          )}

          {text && (
            <Line
              gap={0.5}

              direction='column'

              flex

              {...TextProps}
            >
              {name && (is('string', name) ? (
                <Type
                  version='l2'
                >
                  {name}
                </Type>
              ) : name)}

              {description && (is('string', description) ? (
                <Type
                  version='b3'
                >
                  {description}
                </Type>
              ) : description)}
            </Line>
          )}

          {end && (
            <Line
              gap={0}

              direction='row'

              align='center'

              {...AsideProps}

              {...EndProps}

              className={classNames([
                AsideProps?.className,
                EndProps?.className,
                classes.aside
              ])}
            >
              {end}
            </Line>
          )}
        </Line>
      )}

      <Line
        gap={2}

        direction={row ? responsive ? {
          default: 'row',
          1400: 'column'
        } : 'row' : 'column'}

        fullWidth

        className={classNames([
          staticClassName('FormRow', theme) && [
            'onesy-FormRow-main'
          ],

          MainProps?.className,
          row && classes.row
        ])}

        {...MainProps}
      >
        {children}
      </Line>

      {footer && (
        <Line
          direction='row'

          justify='flex-end'

          fullWidth

          className={classes.footer}
        >
          {footer}
        </Line>
      )}
    </Component>
  );
});

FormRow.displayName = 'onesy-FormRow';

export default FormRow;
