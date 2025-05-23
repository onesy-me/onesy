import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeployedCodeAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeAlertFilled'

      short_name='DeployedCodeAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-526 243-663l-43 25v42l280 162 280-162v-42l-43-25-237 137ZM120-275v-410l360-207 360 207v232q-27-13-57.5-20t-62.5-7q-116 0-198 82t-82 198q0 27 5 53t15 50l10 23-350-201ZM720-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-20-80h40v-160h-40v160ZM720 0q-83 0-141.5-58.5T520-200q0-83 58.5-141.5T720-400q83 0 141.5 58.5T920-200q0 83-58.5 141.5T720 0Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeAlertFilled.displayName = 'OnesyIconMaterialDeployedCodeAlertFilled';

export default IconMaterialDeployedCodeAlertFilled;
