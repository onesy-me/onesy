import React from 'react';

import { is } from '@onesy/utils';
import { TPaletteVersion, classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import SectionElement, { ISection } from '../Section/Section';
import WatchElement from '../Watch';
import { IWatch } from '../Watch/Watch';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-SectionWatch' });

export type ISectionWatch = ISection & {
  version?: 'regular' | 'analog' | 'modern' | 'minimal';

  color?: TPaletteVersion;

  WatchProps?: IWatch;
};

const Element: React.FC<ISectionWatch> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySectionWatch?.props?.default, ...props_ };

  const Section = theme?.elements?.Section || SectionElement;

  const Watch = theme?.elements?.Watch || WatchElement;

  const {
    ref,

    version = 'modern',
    size = 'regular',

    WatchProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

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

      padding='small'

      align='center'

      className={classNames([
        staticClassName('SectionWatch', theme) && [
          'onesy-SectionWatch-root',
          `onesy-SectionWatch-version-${version}`,
          `onesy-SectionWatch-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Watch
        version={version}

        size={size}

        {...WatchProps}
      />
    </Section>
  );
};

Element.displayName = 'onesy-SectionWatch';

export default Element;
