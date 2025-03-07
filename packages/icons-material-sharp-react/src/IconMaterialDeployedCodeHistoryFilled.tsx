import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeployedCodeHistoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeHistoryFilled'

      short_name='DeployedCodeHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M740-208v-112h-40v128l86 86 28-28-74-74ZM480-526 243-663l-43 25v42l280 162 280-162v-42l-43-25-237 137ZM120-275v-410l360-207 360 207v232q-27-13-57.5-20t-62.5-7q-116 0-198 82t-82 198q0 27 5 53t15 50l10 23-350-201ZM720 0q-83 0-141.5-58.5T520-200q0-83 58.5-141.5T720-400q83 0 141.5 58.5T920-200q0 83-58.5 141.5T720 0Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeHistoryFilled.displayName = 'OnesyIconMaterialDeployedCodeHistoryFilled';

export default IconMaterialDeployedCodeHistoryFilled;
