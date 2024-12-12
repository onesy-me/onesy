import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebAssetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetW100Filled'

      short_name='WebAsset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h640v-400H160v400Z"/>
    </Icon>
  );
});

IconMaterialWebAssetW100Filled.displayName = 'OnesyIconMaterialWebAssetW100Filled';

export default IconMaterialWebAssetW100Filled;
