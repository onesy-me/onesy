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
      <path d="M450-145 202-288q-14-8-22-22t-8-30v-280q0-16 8-30t22-22l248-143q14-8 30-8t30 8l248 143q14 8 22 22t8 30v280q0 16-8 30t-22 22L510-145q-14 8-30 8t-30-8Zm16-327v304q7 4 14 4t14-4v-304l266-154q0-5-2.5-10t-7.5-8l-7-4-263 152-263-152-7 4q-5 3-7.5 8t-2.5 10l266 154Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeW100Filled.displayName = 'OnesyIconMaterialDeployedCodeW100Filled';

export default IconMaterialDeployedCodeW100Filled;
