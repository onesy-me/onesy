import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRouteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RouteW100'

      short_name='Route'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-146v-479.21Q191-638 168.5-663.5T146-719.66q0-39.31 27.38-66.82Q200.76-814 239.88-814q39.12 0 66.62 27.52 27.5 27.51 27.5 66.82 0 30.66-22.5 56.16Q289-638 254-625v451h212v-640h268v479.21q35 12.79 57.5 38.29t22.5 56.16q0 39.31-27.38 66.82Q759.24-146 720.12-146q-39.12 0-66.62-27.52-27.5-27.51-27.5-66.82Q626-271 648.5-297q22.5-26 57.5-38v-451H494v640H226Zm14-508q27 0 46.5-19.5T306-720q0-27-19.5-46.5T240-786q-27 0-46.5 19.5T174-720q0 27 19.5 46.5T240-654Zm480 480q27 0 46.5-19.5T786-240q0-27-19.5-46.5T720-306q-27 0-46.5 19.5T654-240q0 27 19.5 46.5T720-174ZM240-720Zm480 480Z"/>
    </Icon>
  );
});

IconMaterialRouteW100.displayName = 'OnesyIconMaterialRouteW100';

export default IconMaterialRouteW100;
