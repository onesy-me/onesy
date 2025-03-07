import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightlightOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightOffFilled'

      short_name='NightlightOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M819 1028 701 910q-48 32-103.5 49T480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-62 17-117.5T146 355L27 236l57-57 792 792-57 57ZM480 816q27 0 52-5t48-16q-42-20-74-53t-49-76L263 472q-11 24-17 50t-6 54q0 100 70 170t170 70Zm335-20L473 454q19-32 46-57t61-40q-23-11-48-16t-52-5q-28 0-53.5 6T378 359L260 241q48-31 103.5-48T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 61-17 116.5T815 796Z"/>
    </Icon>
  );
});

IconMaterialNightlightOffFilled.displayName = 'OnesyIconMaterialNightlightOffFilled';

export default IconMaterialNightlightOffFilled;
