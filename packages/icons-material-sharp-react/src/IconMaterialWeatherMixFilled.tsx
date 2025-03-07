import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeatherMixFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeatherMixFilled'

      short_name='WeatherMix'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-40q-25 0-42.5-17T440-99q0-12 4.5-23t13.5-19l42-39 42 39q9 8 13.5 19t4.5 23q0 25-17.5 42T500-40Zm-138-60-42-42 118-118 42 42-118 118Zm258-60-60-60 60-60 60 60-60 60Zm-360 0-60-60 60-60 60 60-60 60Zm40-160q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Z"/>
    </Icon>
  );
});

IconMaterialWeatherMixFilled.displayName = 'OnesyIconMaterialWeatherMixFilled';

export default IconMaterialWeatherMixFilled;
