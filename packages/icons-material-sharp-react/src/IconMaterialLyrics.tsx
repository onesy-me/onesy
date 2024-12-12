import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLyrics = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lyrics'

      short_name='Lyrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-320v-480 480ZM80-80v-800h600v97q-24 11-44 27t-36 36v-80H160v480h440v-160q16 20 36 36t44 27v177H240L80-80Zm160-320h160v-80H240v80Zm520-80q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 2t19 5v-207h160v80h-80v240q0 50-35 85t-85 35Zm-520-40h280v-80H240v80Zm0-120h280v-80H240v80Z"/>
    </Icon>
  );
});

IconMaterialLyrics.displayName = 'OnesyIconMaterialLyrics';

export default IconMaterialLyrics;
