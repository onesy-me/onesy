import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Confirm, MainProgress, Snackbars } from '@onesy/ui-react';
import { OnesyTheme, Style, Theme } from '@onesy/style-react';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('onesy-root') as HTMLElement
);

const valueTheme = new OnesyTheme({
  palette: {
    color: {
      onesy: {
        main: '#5FE11E'
      },

      primary: {
        main: '#032BD6'
      }
    }
  },

  // colors
  getBackground: (theme, type = 'primary') => {
    if (type === 'secondary') return `hsl(from var(--onesy-palette-color-primary) h 50 ${theme.palette.light ? 96 : 20})`;

    return theme.palette.light ? theme.palette.color.primary[100] : `hsl(from var(--onesy-palette-color-primary) h 50 25)`;
  }
});

root.render(
  <BrowserRouter>
    <Style>
      <Theme
        value={valueTheme}
      >
        <Snackbars>
          <MainProgress>
            <Confirm>
              <App />
            </Confirm>
          </MainProgress>
        </Snackbars>
      </Theme>
    </Style>
  </BrowserRouter>
);
