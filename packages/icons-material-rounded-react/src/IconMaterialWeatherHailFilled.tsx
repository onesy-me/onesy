import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeatherHailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeatherHailFilled'

      short_name='WeatherHail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m546-86-32 32q-6 6-14 6t-14-6l-32-32q-6-6-6-14t6-14l32-32q6-6 14-6t14 6l32 32q6 6 6 14t-6 14Zm-205-35q-9-9-9-21t9-21l76-76q9-9 21-9t21 9q9 9 9 21t-9 21l-76 76q-9 9-21 9t-21-9Zm325-85-32 32q-6 6-14 6t-14-6l-32-32q-6-6-6-14t6-14l32-32q6-6 14-6t14 6l32 32q6 6 6 14t-6 14Zm-360 0-32 32q-6 6-14 6t-14-6l-32-32q-6-6-6-14t6-14l32-32q6-6 14-6t14 6l32 32q6 6 6 14t-6 14Zm-6-114q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Z"/>
    </Icon>
  );
});

IconMaterialWeatherHailFilled.displayName = 'OnesyIconMaterialWeatherHailFilled';

export default IconMaterialWeatherHailFilled;
