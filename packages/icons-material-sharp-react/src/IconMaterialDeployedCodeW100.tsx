import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeployedCodeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeW100'

      short_name='DeployedCode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-168v-304L200-626v304l266 154Zm28 0 266-154v-304L494-472v304Zm-14-328 263-152-263-152-263 152 263 152ZM172-305v-350l308-177 308 177v350L480-128 172-305Zm308-175Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeW100.displayName = 'OnesyIconMaterialDeployedCodeW100';

export default IconMaterialDeployedCodeW100;
