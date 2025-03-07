import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvShadowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvShadowFilled'

      short_name='EvShadow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm68-88q75-19 130-74t74-130L548-208Zm-67-18 278-278q-2-14-4-28.5t-7-28.5L444-257q8 9 17.5 16.5T481-226Zm-74-79 315-315q-6-10-12-19.5T696-658L385-348q5 11 10.5 21.5T407-305Zm-40-108 286-287q-10-8-19.5-14.5T613-727L360-474q1 16 2.5 31t4.5 30Zm0-152 185-186q-15-4-30-6t-30-3q-49 29-81 79t-44 116Z"/>
    </Icon>
  );
});

IconMaterialEvShadowFilled.displayName = 'OnesyIconMaterialEvShadowFilled';

export default IconMaterialEvShadowFilled;
