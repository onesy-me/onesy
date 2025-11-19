import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialCircle from '@onesy/icons-material-rounded-react/IconMaterialCircleW100Filled';
import IconMaterialNightlight from '@onesy/icons-material-rounded-react/IconMaterialNightlightW100Filled';
import IconMaterialCloud from '@onesy/icons-material-rounded-react/IconMaterialCloudW100Filled';
import IconMaterialRainy from '@onesy/icons-material-rounded-react/IconMaterialRainyW100Filled';
import IconMaterialCloudySnowing from '@onesy/icons-material-rounded-react/IconMaterialCloudySnowingW100Filled';

import SurfaceElement from '../Surface';
import TypeElement from '../Type';
import FadeElement from '../Fade';
import TransitionsElement from '../Transitions';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny } from '../types';

const IconWeather = React.forwardRef((props: any, ref: any) => {
  const theme = useOnesyTheme();

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const {
    tonal,
    color: color_,

    style,

    ...other
  } = props;

  return (
    <Surface
      tonal={tonal}

      color={color_}
    >
      {({ color, backgroundColor }) => (
        <svg
          ref={ref}

          viewBox='0 0 177 178'

          xmlns='http://www.w3.org/2000/svg'

          {...other}

          style={{
            ...style,

            color,

            fill: backgroundColor
          }}
        >
          <path
            d='M93.964 1.5C85.944 3.181 78.964 4.033 66.185 12.689C62.393 14.903 52.521 23.956 36.901 39.544C15.559 60.841 12.951 63.812 9.244 71.058C2.449 84.337 0.5 92.138 0.5 106.058C0.5 115.812 0.935 119.455 2.826 125.523C10.658 150.657 27.954 167.964 52.964 175.692C59.053 177.573 62.722 178.008 72.464 178C86.543 177.99 93.354 176.43 105.964 170.329C114.063 166.411 115.649 165.033 139.556 141.138C162.652 118.054 166.644 113.063 170.5 105.504C175.5 93.058 176.964 86.676 176.964 74.212C176.964 61.815 175.094 53.787 169.473 42.058C160.683 23.716 143.356 9.513 123.082 4.033C114.951 1.835 101.984 -0.181001 93.964 1.5Z'
          />
        </svg>
      )}
    </Surface>
  );
});

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    aspectRatio: '1',
    width: '100vw',

    '&.onesy-Surface-root': {
      background: 'transparent'
    }
  },

  text: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: '1',
    userSelect: 'none'
  },

  text_regular: {
    top: '22%',
    width: '100%',
    paddingLeft: '30%',
    paddingRight: '11%',
    fontSize: '34%'
  },

  text_large: {
    top: '22%',
    width: '100%',
    paddingLeft: '27%',
    paddingRight: '11%',
    fontSize: '30%'
  },

  icon_background: {
    '&.onesy-Icon-root': {
      width: '100%',
      height: 'auto'
    }
  },

  icon_background_shadow: {
    filter: `drop-shadow(0px 6px 10px rgb(0 0 0 / 4%)) drop-shadow(0px 1px 18px rgb(0 0 0 / 1%)) drop-shadow(0px 3px 5px rgb(0 0 0 / 7%))`
  },

  icon_dayTime: {
    '&.onesy-Icon-root': {
      position: 'absolute',
      zIndex: '1',
      bottom: '21%',
      width: '40% !important',
      height: 'auto',
      left: '13%'
    }
  },

  icon_dayTime_day: {
    '&.onesy-Icon-root': {
      color: '#fcc21d'
    }
  },

  icon_dayTime_night: {
    '&.onesy-Icon-root': {
      color: '#dfe0e2'
    }
  },

  icon_weather: {
    position: 'absolute',
    width: '40% !important',
    height: 'auto',
    zIndex: '4'
  },

  icon_arrangement_regular: {
    bottom: '22%',
    left: '15%',
  },

  icon_arrangement_pair: {
    bottom: '8%',
    left: '25%',
    opacity: '0.94 !important'
  },

  icon_weather_cloudy: {
    '&.onesy-Icon-root': {
      color: '#f1f3f4'
    }
  },

  icon_weather_rainy: {
    '&.onesy-Icon-root': {
      color: '#e6f5fc'
    }
  },

  icon_weather_snowy: {
    '&.onesy-Icon-root': {
      color: '#dcf0ff'
    }
  },

  size_small: {
    maxWidth: '120px'
  },

  size_regular: {
    maxWidth: '180px'
  },

  size_large: {
    maxWidth: '240px'
  }
}), { name: 'onesy-Weather' });

export type TWeatherDayTime = 'day' | 'night';

export type TWeather = 'clear' | 'partly clear' | 'rainy' | 'partly rainy' | 'snowy' | 'partly snowy';

export type TTemperature = number;

export type IWeather = ISurface & {
  shadow?: boolean;

  dayTime?: TWeatherDayTime;

  weather?: TWeather;

  temperature?: TTemperature;

  values?: {
    dayTime?: TWeatherDayTime;

    weather?: TWeather;

    temperature?: TTemperature;
  };

  // Once every 1 hour
  interval?: number;

  IconDay?: IElementReference;
  IconNight?: IElementReference;
  IconCloud?: IElementReference;
  IconRain?: IElementReference;
  IconSnow?: IElementReference;

  IconProps?: IPropsAny;
};

const Weather: React.FC<IWeather> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyWeather?.props?.default, ...props_ };

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const Type = theme?.elements?.Type || TypeElement;

  const Fade = theme?.elements?.Fade || FadeElement;

  const Transitions = theme?.elements?.Transitions || TransitionsElement;

  const {
    tonal = true,
    color = 'primary',
    version = 'filled',

    size = 'regular',

    shadow,

    dayTime: dayTime_,
    weather: weather_,
    temperature: temperature_,

    values: values_,

    // Once every 1 hour
    interval = 60 * 60 * 1e3,

    IconDay = IconMaterialCircle,
    IconNight = IconMaterialNightlight,

    IconCloud = IconMaterialCloud,
    IconRain = IconMaterialRainy,
    IconSnow = IconMaterialCloudySnowing,

    IconProps: IconProps_,

    Component = 'div',

    className,
    style,

    ...other
  } = props;

  const { classes } = useStyle();

  const [rect, setRect] = React.useState<DOMRect>();
  const [values, setValues] = React.useState(values_ !== undefined ? values_ : {
    dayTime: dayTime_ !== undefined ? dayTime_ : 'day',
    weather: weather_ !== undefined ? weather_ : 'clear',
    temperature: temperature_ !== undefined ? temperature_ : '14'
  });

  const refs = {
    root: React.useRef<any>(undefined),
    values: React.useRef<any>(undefined)
  };

  refs.values.current = values;

  const styles: any = {
    root: {

    }
  };

  React.useEffect(() => {
    const method = () => setRect(refs.root.current?.getBoundingClientRect());

    const observer = new ResizeObserver(method);

    method();

    observer.observe(refs.root.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  React.useEffect(() => {
    if (values_ !== undefined && values_ !== refs.values.current) setValues(values_);
  }, [values_]);

  React.useEffect(() => {
    if (dayTime_ !== undefined && dayTime_ !== refs.values.current.dayTime) setValues(values__ => ({
      ...values__,

      dayTime: dayTime_
    }));
  }, [dayTime_]);

  React.useEffect(() => {
    if (weather_ !== undefined && weather_ !== refs.values.current.weather) setValues(values__ => ({
      ...values__,

      weather: weather_
    }));
  }, [weather_]);

  React.useEffect(() => {
    if (temperature_ !== undefined && temperature_ !== refs.values.current.temperature) setValues(values__ => ({
      ...values__,

      temperature: temperature_
    }));
  }, [temperature_]);

  if (!['small', 'regular', 'large'].includes(size as any)) styles.root.maxWidth = size;

  const IconProps: any = {
    color: 'unset',

    ...IconProps_
  };

  let IconDayTime = IconDay;

  if (['day'].includes(values.dayTime)) IconDayTime = IconDay;

  if (['night'].includes(values.dayTime)) IconDayTime = IconNight;

  let IconWeather_ = IconCloud;

  if (['partly clear', 'cloudy'].includes(values.weather)) IconWeather_ = IconCloud;

  if (['rainy'].includes(values.weather)) IconWeather_ = IconRain;

  if (['snowy'].includes(values.weather)) IconWeather_ = IconSnow;

  const useDayTime = ['clear', 'partly clear'].includes(values.weather);

  const useWeather = !['clear'].includes(values.weather);

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      version={version}

      Component={Component}

      className={classNames([
        staticClassName('Weather', theme) && [
          'onesy-Weather-root',
          `onesy-Weather-version-${version}`,
          `onesy-Weather-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`]
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      <IconWeather
        tonal={tonal}

        color={color}

        className={classNames([
          staticClassName('Weather', theme) && [
            'onesy-Weather-icon-background'
          ],

          classes.icon_background,
          shadow && classes.icon_background_shadow
        ])}
      />

      <Fade
        in={values.temperature !== undefined}
      >
        <Type
          version='d1'

          className={classNames([
            staticClassName('Weather', theme) && [
              'onesy-Weather-text'
            ],

            classes.text,
            classes[`text_${+values.temperature < 100 ? 'regular' : 'large'}`]
          ])}

          style={{
            fontSize: `${(rect?.width || 0) * (+values.temperature < 100 ? +values.temperature < -10 ? 0.32 : 0.34 : 0.27)}px`
          }}
        >
          {values.temperature}°
        </Type>
      </Fade>

      {/* Day time */}
      {useDayTime && (
        <Transitions>
          <Fade
            key={values.dayTime}
          >
            <IconDayTime
              {...IconProps}

              className={classNames([
                staticClassName('Weather', theme) && [
                  'onesy-Weather-icon',
                  'onesy-Weather-icon-day-time'
                ],

                IconProps?.className,
                classes.icon_dayTime,
                classes[`icon_dayTime_${values.dayTime}`]
              ])}
            />
          </Fade>
        </Transitions>
      )}

      {/* Weather */}
      {useWeather && values.weather && (
        <Transitions>
          <Fade
            key={values.weather}
          >
            <IconWeather_
              {...IconProps}

              className={classNames([
                staticClassName('Weather', theme) && [
                  'onesy-Weather-icon',
                  'onesy-Weather-icon-weather'
                ],

                IconProps?.className,
                classes.icon_weather,
                classes[`icon_weather_${values.weather === 'partly clear' ? 'cloudy' : values.weather}`],
                classes[`icon_arrangement_${useDayTime ? 'pair' : 'regular'}`]
              ])}
            />
          </Fade>
        </Transitions>
      )}
    </Surface>
  );
});

Weather.displayName = 'onesy-Weather';

export default Weather;
