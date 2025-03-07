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
      <path d="m791 999-90-89q-48 32-103.5 49T480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-62 17-117.5T146 355l-91-91q-12-12-11.5-28.5T56 207q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791 999ZM240 576q0 100 70 170t170 70q17 0 32-2t30-6q4-1 12-15 1-5-1.5-10t-7.5-8q-26-15-50-44t-38-65L263 472q-11 24-17 50t-6 54Zm575 220L473 454q16-27 36-48t36-29q5-4 7.5-8.5t1.5-9.5q-1-5-4-9t-8-6q-15-4-30-6t-32-2q-28 0-53.5 6T378 359L260 241q48-31 103.5-48T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 61-17 116.5T815 796Z"/>
    </Icon>
  );
});

IconMaterialNightlightOffFilled.displayName = 'OnesyIconMaterialNightlightOffFilled';

export default IconMaterialNightlightOffFilled;
