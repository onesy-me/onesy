import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvShadow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvShadow'

      short_name='EvShadow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120ZM200-480q0 83 44.5 152T365-225q-42-51-63.5-120T280-492q0-66 16-125t46-107q-66 38-104 103t-38 141Zm348 272q75-19 130-74t74-130L548-208Zm-67-18 278-278q-2-14-4-28.5t-7-28.5L444-257q8 9 17.5 16.5T481-226Zm-74-79 315-315q-6-10-12-19.5T696-658L385-348q5 11 10.5 21.5T407-305Zm-40-108 286-287q-10-8-19.5-14.5T613-727L360-474q1 16 2.5 31t4.5 30Zm0-152 185-186q-15-4-30-6t-30-3q-49 29-81 79t-44 116Zm-87 73Z"/>
    </Icon>
  );
});

IconMaterialEvShadow.displayName = 'OnesyIconMaterialEvShadow';

export default IconMaterialEvShadow;
