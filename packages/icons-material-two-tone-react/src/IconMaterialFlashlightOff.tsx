import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashlightOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOff'

      short_name='FlashlightOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><g><polygon opacity=".3" points="16,7 9.83,7 14,11.17 14,10.4 16,7.39"/><polygon opacity=".3" points="10,12.83 10,20 14,20 14,16.83"/><polygon opacity=".3" points="16,5 16,4 6.83,4 7.83,5"/></g><g><path d="M2.81,2.81L1.39,4.22L8,10.83V22h8v-3.17l3.78,3.78l1.41-1.41L2.81,2.81z M14,20h-4v-7.17l4,4V20z"/><polygon points="16,4 16,5 7.83,5 9.83,7 16,7 16,7.39 14,10.4 14,11.17 16,13.17 16,11 18,8 18,2 6,2 6,3.17 6.83,4"/></g></g></g>
    </Icon>
  );
});

IconMaterialFlashlightOff.displayName = 'OnesyIconMaterialFlashlightOff';

export default IconMaterialFlashlightOff;
