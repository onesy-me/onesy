import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import NavigationDrawerElement from '../NavigationDrawer';
import { INavigationDrawer } from '../NavigationDrawer/NavigationDrawer';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '&.onesy-Modal-root .onesy-Modal-surface': {
      paddingTop: theme.methods.space.value(6.25, 'px'),
      maxWidth: '640px',

      '&:before': {
        content: "''",
        position: 'absolute',
        background: 'currentColor',
        height: '4px',
        width: '32px',
        top: '23px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: theme.methods.shape.radius.value(0.5, 'px'),
        opacity: '0.4'
      }
    },

    '@media only screen and (min-width: 640px)': {
      '&.onesy-Modal-root .onesy-Modal-surface': {
        marginTop: '72px',
        marginInline: '56px'
      }
    }
  },
}), { name: 'onesy-BottomSheet' });

export type IBottomSheet = INavigationDrawer & {

};

const BottomSheet: React.FC<IBottomSheet> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyBottomSheet?.props?.default, ...props_ };

  const NavigationDrawer = theme?.elements?.NavigationDrawer || NavigationDrawerElement;

  const {
    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <NavigationDrawer
      direction='bottom'

      className={classNames([
        staticClassName('BottomSheet', theme) && [
          'onesy-BottomSheet-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
};

BottomSheet.displayName = 'onesy-BottomSheet';

export default BottomSheet;
