import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightlightBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightBadge'

      short_name='NightlightBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm0 240q17 0 32-2t30-6q4-1 12-15 1-5-1.5-10t-7.5-8q-48-32-76.5-84T440 576q0-63 28.5-115t76.5-84q5-4 7.5-8.5t1.5-9.5q-1-5-4-9t-8-6q-15-4-30-6t-32-2q-100 0-170 69.5T240 576q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialNightlightBadge.displayName = 'OnesyIconMaterialNightlightBadge';

export default IconMaterialNightlightBadge;
