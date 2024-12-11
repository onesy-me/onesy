import ReactDOM from 'react-dom/client';

import { Snackbars, Confirm, MainProgress, Widgets, ScreenCapture, Timer, Countdown, Weather, Watch } from '@onesy/ui-react';
import { OnesyStyle, OnesyStyleProvider, OnesyThemeProvider, valueObject, prefix, rtl, unit } from '@onesy/style-react';

import IconMaterialTimerRounded from '@onesy/icons-material-react/build/IconMaterialTimerRounded';
import IconMaterialVideocamRounded from '@onesy/icons-material-react/build/IconMaterialVideocamRounded';
import IconMaterialAvTimerRounded from '@onesy/icons-material-react/build/IconMaterialAvTimerRounded';
import IconMaterialWeatherRounded from '@onesy/icons-material-react/build/IconMaterialClearDayRounded';
import IconMaterialNestClockFarsightDigitalRounded from '@onesy/icons-material-react/build/IconMaterialNestClockFarsightDigitalRounded';
import IconMaterialNestClockFarsightAnalogRounded from '@onesy/icons-material-react/build/IconMaterialNestClockFarsightAnalogRounded';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const onesyStyle = new OnesyStyle();

onesyStyle.plugins.add = [unit, prefix, rtl, valueObject];

const widgets = [
  {
    label: 'Regular Clock',
    Icon: IconMaterialNestClockFarsightDigitalRounded,
    element: <Watch />
  },
  {
    label: 'Modern Clock',
    Icon: IconMaterialNestClockFarsightAnalogRounded,
    element: <Watch version='minimal' size='small' />
  },
  {
    label: 'Weather',
    Icon: IconMaterialWeatherRounded,
    element: <Weather temperature={14} weather='clear' />
  },
  {
    label: 'Screen Capture',
    Icon: IconMaterialVideocamRounded,
    move: false,
    element: <ScreenCapture />
  },
  {
    label: 'Timer',
    Icon: IconMaterialTimerRounded,
    element: <Timer />
  },
  {
    label: 'Countdown',
    Icon: IconMaterialAvTimerRounded,
    element: <Countdown />
  }
];

root.render(
  <OnesyStyleProvider value={onesyStyle}>
    <OnesyThemeProvider>
      <MainProgress>
        <Confirm>
          <Snackbars>
            <Widgets
              widgets={widgets}
            >
              <App />
            </Widgets>
          </Snackbars>
        </Confirm>
      </MainProgress>
    </OnesyThemeProvider>
  </OnesyStyleProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
