import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeployedCodeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeW100Filled'

      short_name='DeployedCode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-128 172-305v-350l308-177 308 177v350L480-128Zm-14-344v304q7 4 14 4t14-4v-304l266-154q0-5-2.5-10t-7.5-8l-7-4-263 152-263-152-7 4q-5 3-7.5 8t-2.5 10l266 154Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeW100Filled.displayName = 'OnesyIconMaterialDeployedCodeW100Filled';

export default IconMaterialDeployedCodeW100Filled;
