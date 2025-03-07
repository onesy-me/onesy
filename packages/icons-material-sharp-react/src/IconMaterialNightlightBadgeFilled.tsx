import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightlightBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightBadgeFilled'

      short_name='NightlightBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-160q27 0 52-5t48-16q-63-29-101.5-87T440 576q0-74 38.5-132T580 357q-23-11-48-16t-52-5q-100 0-170 69.5T240 576q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialNightlightBadgeFilled.displayName = 'OnesyIconMaterialNightlightBadgeFilled';

export default IconMaterialNightlightBadgeFilled;
