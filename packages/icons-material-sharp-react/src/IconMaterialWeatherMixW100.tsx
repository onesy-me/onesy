import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeatherMixW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeatherMixW100'

      short_name='WeatherMix'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M529.12-96Q515-96 505-105.51q-10-9.51-10-23.49 0-6.35 2-12.18 2-5.82 7.29-10.59L529-175l24.71 23.23Q559-147 561-141.03q2 5.96 2 12.47 0 13.56-9.88 23.06-9.88 9.5-24 9.5ZM391-151l-21-21 97-97 21 21-97 97Zm258-60-39-39 39-39 39 39-39 39Zm-360 0-39-39 39-39 39 39-39 39Zm11-135q-81 0-137.5-56.5T106-540q0-76 51.5-131T287-734q29.09-56.07 79.55-88.03Q417-854 479.62-854q85.38 0 145.88 57T695-655q75 4 117 49.5t42 105.8q0 63.7-44.92 108.7-44.91 45-109.08 45H300Zm0-28h400q52 0 89-37t37-89q0-52-37-89t-89-37h-34v-14q0-76.72-54.68-131.36Q556.63-826 479.85-826q-55.85 0-101.73 30.33Q332.23-765.33 309-714l-3.14 8H298q-67.74 2.37-115.87 50.39Q134-607.59 134-540q0 68.77 48.61 117.39Q231.23-374 300-374Zm180-226Z"/>
    </Icon>
  );
});

IconMaterialWeatherMixW100.displayName = 'OnesyIconMaterialWeatherMixW100';

export default IconMaterialWeatherMixW100;
