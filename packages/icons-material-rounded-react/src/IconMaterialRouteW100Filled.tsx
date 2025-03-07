import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRouteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RouteW100Filled'

      short_name='Route'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-146q-56 0-95-39t-39-95v-345q-35-13-57.5-38.5T146-719.66q0-39.31 27.38-66.82Q200.76-814 239.88-814q39.12 0 66.62 27.52 27.5 27.51 27.5 66.82 0 30.66-22.5 56.16Q289-638 254-625v345q0 43.73 31.19 74.86 31.2 31.14 75 31.14Q404-174 435-205.14q31-31.13 31-74.86v-400q0-56 39-95t95-39q56 0 95 39t39 95v345q35 13 57.5 38.5t22.5 56.16q0 39.31-27.38 66.82Q759.24-146 720.12-146q-39.12 0-66.62-27.52-27.5-27.51-27.5-66.82Q626-271 648.5-297q22.5-26 57.5-38v-345q0-43.72-31.19-74.86-31.2-31.14-75-31.14Q556-786 525-754.86T494-680v400q0 56-39 95t-95 39Z"/>
    </Icon>
  );
});

IconMaterialRouteW100Filled.displayName = 'OnesyIconMaterialRouteW100Filled';

export default IconMaterialRouteW100Filled;
