import React from 'react';
import { useNavigate } from 'react-router-dom';

import { is, isEnvironment } from '@onesy/utils';
import { style as styleMethod, classNames, useOnesyTheme } from '@onesy/style-react';

import IconMaterialArrowBack from '@onesy/icons-material-rounded-react/IconMaterialArrowBackW100';
import IconMaterialArrowForward from '@onesy/icons-material-rounded-react/IconMaterialArrowForwardW100';

import IconButtonElement from '../IconButton';
import LineElement from '../Line';
import TooltipElement from '../Tooltip';
import TypeElement from '../Type';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElement, IElementReference } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    height: '100%',
    maxWidth: '1024px',
    padding: theme.methods.space.value(3, 'px'),

    '& .onesy-overflow-y': {
      height: '0px',
      flex: '1 1 auto',
      overflowX: 'hidden',
      overflowY: 'auto'
    }
  },

  name: {
    maxWidth: '440px'
  }
}), { name: 'onesy' });

export type IPageForward = {
  to?: string;
  name?: string;
  label?: string;
};

export type IPage = ILine & {
  back?: IPageForward;
  forward?: IPageForward;

  noHeader?: boolean;

  name?: string | IElement;

  IconBack?: IElementReference;
  IconForward?: IElementReference;
};

const Page: React.FC<IPage> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyPage?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const IconButton = theme?.elements?.IconButton || IconButtonElement;

  const Tooltip = theme?.elements?.Tooltip || TooltipElement;

  const Type = theme?.elements?.Type || TypeElement;

  const {
    back,
    forward,

    noHeader,

    name,

    IconBack = IconMaterialArrowBack,
    IconForward = IconMaterialArrowForward,

    Component = Line,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const navigate = isEnvironment('browser') && useNavigate();

  const IconButtonProps = {
    color: 'inherit'
  };

  const navigation = (back || forward) && (
    <Line
      direction='row'

      align='center'

      justify='space-between'

      fullWidth
    >
      {back ? (
        <Tooltip
          name={(back?.name !== undefined ? back.name : back?.label) || l('Back')}
        >
          <IconButton
            onClick={() => navigate(back?.to)}

            {...IconButtonProps}
          >
            <IconBack />
          </IconButton>
        </Tooltip>
      ) : <span />}

      {forward ? (
        <Tooltip
          name={(forward?.name !== undefined ? forward.name : forward?.label) || l('Forward')}
        >
          <IconButton
            onClick={() => navigate(forward?.to)}

            {...IconButtonProps}
          >
            <IconForward />
          </IconButton>
        </Tooltip>
      ) : <span />}
    </Line>
  );

  const header = !noHeader && (navigation || name) && (
    <Line
      gap={2}

      direction='column'

      fullWidth
    >
      {navigation}

      <Line
        gap={0}

        direction='row'

        align='center'

        justify='center'

        fullWidth
      >
        {is('string', name) ? (
          <Type
            version='t1'

            color='inherit'

            align='center'

            className={classes.name}
          >
            {name}
          </Type>
        ) : name}
      </Line>
    </Line>
  );

  return (
    <Component
      ref={ref}

      gap={4}

      direction='column'

      justify='unset'

      align='unset'

      fullWidth

      flex

      className={classNames([
        staticClassName('Page', theme) && [
          'onesy-Page-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {header}

      <Line
        gap={0}

        direction='column'

        justify='unset'

        align='unset'

        fullWidth

        flex
      >
        {children}
      </Line>
    </Component>
  );
});

Page.displayName = 'onesy-Page';

export default Page;
