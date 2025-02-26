import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoStableW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableW100Filled'

      short_name='VideoStable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm547-28 92-348-488-132-92 345 488 135Z"/>
    </Icon>
  );
});

IconMaterialVideoStableW100Filled.displayName = 'OnesyIconMaterialVideoStableW100Filled';

export default IconMaterialVideoStableW100Filled;
