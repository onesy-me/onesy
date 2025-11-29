import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Confirm, MainProgress, Snackbars } from '@onesy/ui-react';
import { Style, Theme } from '@onesy/style-react';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('onesy-root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Style>
      <Theme>
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
