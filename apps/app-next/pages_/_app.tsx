import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Snackbars, Confirm, MainProgress, Widgets, ScreenCapture, Timer, Countdown, Weather, Watch } from '@onesy/ui-react';
import { OnesyThemeProvider, valueObject, prefix, rtl, unit, makeClassName, useOnesyStyle } from '@onesy/style-react';

import IconMaterialTimerRounded from '@onesy/icons-material-react/IconMaterialTimerRounded';
import IconMaterialVideocamRounded from '@onesy/icons-material-react/IconMaterialVideocamRounded';
import IconMaterialAvTimerRounded from '@onesy/icons-material-react/IconMaterialAvTimerRounded';
import IconMaterialWeatherRounded from '@onesy/icons-material-react/IconMaterialClearDayRounded';
import IconMaterialNestClockFarsightDigitalRounded from '@onesy/icons-material-react/IconMaterialNestClockFarsightDigitalRounded';
import IconMaterialNestClockFarsightAnalogRounded from '@onesy/icons-material-react/IconMaterialNestClockFarsightAnalogRounded';

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

export default function App({ Component, pageProps }: AppProps) {
  const onesyStyle = useOnesyStyle();

  onesyStyle.plugins.add = [unit, prefix, rtl, valueObject, makeClassName];

  return (
    <OnesyThemeProvider>
      <MainProgress>
        <Confirm>
          <Snackbars>
            <Widgets
              widgets={widgets}
            >
              <Component {...pageProps} />
            </Widgets>
          </Snackbars>
        </Confirm>
      </MainProgress>
    </OnesyThemeProvider>
  )
}
