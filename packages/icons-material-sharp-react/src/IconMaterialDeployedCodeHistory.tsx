import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeployedCodeHistory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeHistory'

      short_name='DeployedCodeHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M740-208v-112h-40v128l86 86 28-28-74-74ZM480-526l237-137-237-137-237 137 237 137ZM120-275v-410l360-207 360 207v205h-80v-116L479-434 200-596v274l241 139v92L120-275ZM720 0q-83 0-141.5-58.5T520-200q0-83 58.5-141.5T720-400q83 0 141.5 58.5T920-200q0 83-58.5 141.5T720 0ZM441-491Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeHistory.displayName = 'OnesyIconMaterialDeployedCodeHistory';

export default IconMaterialDeployedCodeHistory;
