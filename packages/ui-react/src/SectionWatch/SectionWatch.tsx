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

const Element: React.FC<ISectionWatch> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySectionWatch?.props?.default, ...props_ }), [props_]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const Watch = React.useMemo(() => theme?.elements?.Watch || WatchElement, [theme]);

  const {
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
});

Element.displayName = 'onesy-SectionWatch';

export default Element;
