import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebAssetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetFilled'

      short_name='WebAsset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-400H160v400Z"/>
    </Icon>
  );
});

IconMaterialWebAssetFilled.displayName = 'OnesyIconMaterialWebAssetFilled';

export default IconMaterialWebAssetFilled;
