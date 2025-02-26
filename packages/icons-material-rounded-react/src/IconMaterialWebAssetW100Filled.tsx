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
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-368H160v368q0 12 10 22t22 10Z"/>
    </Icon>
  );
});

IconMaterialWebAssetW100Filled.displayName = 'OnesyIconMaterialWebAssetW100Filled';

export default IconMaterialWebAssetW100Filled;
