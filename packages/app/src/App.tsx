import React from 'react';

import { DatePicker, Line, Reset, useMediaQuery } from '@onesy/ui-react';
import { classNames, style, useOnesyTheme } from '@onesy/style-react';

const useStyle = style(theme => ({
  '@p': {
    body: {
      color: theme.methods.palette.color.value('primary', 10),
      backgroundColor: theme.palette.color.primary[theme.palette.light ? 98 : 10],
      minHeight: '100vh'
    },

    '#onesy-root': {
      minHeight: '100vh'
    }
  },

  root: {
    background: theme.palette.light ? theme.palette.color.primary[100] : `hsl(from var(--onesy-palette-color-primary) h 50 25)`,
    minHeight: '100vh'
  }
}), { name: 'Root' });

const Main = () => {
  const { classes } = useStyle();

  const theme = useOnesyTheme();
  const light = useMediaQuery('(prefers-color-scheme: light)');

  const update = async (version = 'light', value: any = true) => {
    switch (version) {
      case 'light':
        theme.updateWithRerender({
          palette: {
            light: value
          }
        });

        theme.inited = true;

        break;

      default:
        break;
    }
  };

  // theme
  React.useEffect(() => {
    if (theme.palette.light !== light) update('light', light);
  }, [light, theme]);

  return <>
    <Reset />

    <Line
      direction='column'

      align='center'

      justify='center'

      fullWidth

      className={classNames([
        'onesy-App',

        classes.root
      ])}
    >
      <DatePicker color='primary' />
    </Line>
  </>
};

export default Main;
