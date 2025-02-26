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
      <path d="M226-146v-479.21Q191-638 168.5-663.5T146-719.66q0-39.31 27.38-66.82Q200.76-814 239.88-814q39.12 0 66.62 27.52 27.5 27.51 27.5 66.82 0 30.66-22.5 56.16Q289-638 254-625v451h212v-640h268v479.21q35 12.79 57.5 38.29t22.5 56.16q0 39.31-27.38 66.82Q759.24-146 720.12-146q-39.12 0-66.62-27.52-27.5-27.51-27.5-66.82Q626-271 648.5-297q22.5-26 57.5-38v-451H494v640H226Z"/>
    </Icon>
  );
});

IconMaterialRouteW100Filled.displayName = 'OnesyIconMaterialRouteW100Filled';

export default IconMaterialRouteW100Filled;
