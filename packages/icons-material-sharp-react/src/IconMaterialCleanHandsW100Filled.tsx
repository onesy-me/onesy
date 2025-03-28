import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleanHandsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleanHandsW100Filled'

      short_name='CleanHands'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M112-132v-292h108v292H112Zm448 42-312-92v-242h100l286 105v59H526l-114-40-12 28 124 40h304v58L560-90Zm33-330-229-84H244q0-69 47-113.5T405-670v-130h-60v-28h194q20 0 40 4.5t38 14.5l-21 21q-14-6-28-9t-29-3H433v130q68 7 114 56.5T593-496v76Zm141-160q-23 0-38.5-15.5T680-634q0-18 12.5-45t41.5-69q29 42 41.5 68.5T788-634q0 23-15.5 38.5T734-580Z"/>
    </Icon>
  );
});

IconMaterialCleanHandsW100Filled.displayName = 'OnesyIconMaterialCleanHandsW100Filled';

export default IconMaterialCleanHandsW100Filled;
