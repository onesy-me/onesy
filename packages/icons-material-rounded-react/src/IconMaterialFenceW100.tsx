import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFenceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FenceW100'

      short_name='Fence'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-186q-12.75 0-21.37-8.63Q226-203.25 226-216v-130h-14.04q-5.96 0-9.96-4.04-4-4.03-4-10 0-5.96 4.02-9.96 4.03-4 9.98-4h14v-132h-14.04q-5.96 0-9.96-4.04-4-4.03-4-10 0-5.96 4.02-9.96 4.03-4 9.98-4h14v-123q0-5.57 2-10.78 2-5.22 6.81-10.03L299-742q9-9 21-9t21 9l59 59 59-59q9.07-9 21.53-9 12.47 0 21.47 9l59 59 58-59q9.07-9 21.53-9 12.47 0 21.47 9l64.19 64.19Q731-673 733-667.78q2 5.21 2 10.78v123h13.23q5.77 0 9.77 4.04 4 4.03 4 10 0 5.96-3.93 9.96-3.93 4-9.74 4H735v132h13.23q5.77 0 9.77 4.04 4 4.03 4 10 0 5.96-3.93 9.96-3.93 4-9.74 4H735v130q0 12.75-8.62 21.37Q717.75-186 705-186H256Zm-2-348h132v-124l-66-66-66 66v124Zm160 0h132v-124l-66-66-66 66v124Zm161 0h131v-124l-66-66-65 66v124ZM254-374h132v-132H254v132Zm160 0h132v-132H414v132Zm161 0h131v-132H575v132ZM254-214h132v-132H254v132Zm160 0h132v-132H414v132Zm161 0h131v-132H575v132Z"/>
    </Icon>
  );
});

IconMaterialFenceW100.displayName = 'OnesyIconMaterialFenceW100';

export default IconMaterialFenceW100;
