import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepartition = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Repartition'

      short_name='Repartition'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" opacity=".3" width="3.33" x="15.67" y="17"/><rect height="2" opacity=".3" width="3.33" x="10.33" y="17"/><rect height="2" opacity=".3" width="3.33" x="5" y="17"/><path d="M3,21h18v-6H3V21z M15.67,17H19v2h-3.33V17z M10.33,17h3.33v2h-3.33V17z M5,17h3.33v2H5V17z"/><path d="M6,10l1.42-1.42L5.83,7H17c1.1,0,2,0.9,2,2s-0.9,2-2,2H3v2h14c2.21,0,4-1.79,4-4s-1.79-4-4-4H5.83l1.59-1.59L6,2L2,6L6,10 z"/></g></g>
    </Icon>
  );
});

IconMaterialRepartition.displayName = 'OnesyIconMaterialRepartition';

export default IconMaterialRepartition;
