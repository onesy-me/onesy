import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFoldedHandsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoldedHandsW100Filled'

      short_name='FoldedHands'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M607-132q-8 0-15-4t-11-11l-65-109q-5-7-7-15t-2-16v-187q0-23 12-41t33-18q8 0 14 4t10 11l33 62v96q0 6 4 10t10 4q6 0 10-4t4-10v-89q0-8-1.5-14.5T630-477L501-715q-16-29-9.5-61.5T518-836q8-11 21.5-11t22.5 11l214 257q6 7 9.5 15.5T790-546l34 381q2 14-7 23.5t-23 9.5H607Zm-442 0q-14 0-23-9.5t-7-23.5l34-381q1-9 4.5-17.5T183-579l214-257q9-11 22-11t22 11q20 27 26.5 59.5T458-715L329-477q-4 7-5.5 13.5T322-449v89q0 6 4 10t10 4q6 0 10-4t4-10v-96l33-61q4-7 9.5-11t13.5-4q21 0 33.5 17.5T452-474v187q0 8-2 16t-7 15l-65 109q-4 7-11 11t-15 4H165Z"/>
    </Icon>
  );
});

IconMaterialFoldedHandsW100Filled.displayName = 'OnesyIconMaterialFoldedHandsW100Filled';

export default IconMaterialFoldedHandsW100Filled;
