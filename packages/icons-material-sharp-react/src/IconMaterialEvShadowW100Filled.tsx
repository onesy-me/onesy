import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvShadowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvShadowW100Filled'

      short_name='EvShadow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120q0 64-24 120t-66 98q-42 42-98 66t-120 24Zm40-31q93-14 158-79t79-158L520-203Zm-39-1 279-278q0-25-5-49t-13-47L428-263q11 17 24.5 31.5T481-204Zm-68-84 317-318q-9-18-20-34.5T685-671L381-366q6 21 14 40.5t18 37.5Zm-39-110 292-292q-16-14-33-25t-36-19L368-506q-2 28-.5 55t6.5 53Zm-1-151 196-196q-18-6-36.5-10t-38.5-5q-48 35-79 89t-42 122Z"/>
    </Icon>
  );
});

IconMaterialEvShadowW100Filled.displayName = 'OnesyIconMaterialEvShadowW100Filled';

export default IconMaterialEvShadowW100Filled;
