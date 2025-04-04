import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeployedCodeAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeAlert'

      short_name='DeployedCodeAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-526 237-137-237-137-237 137 237 137ZM120-275v-410l360-207 360 207v205h-80v-116L479-434 200-596v274l241 139v92L120-275ZM720-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-20-80h40v-160h-40v160ZM720 0q-83 0-141.5-58.5T520-200q0-83 58.5-141.5T720-400q83 0 141.5 58.5T920-200q0 83-58.5 141.5T720 0ZM441-491Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeAlert.displayName = 'OnesyIconMaterialDeployedCodeAlert';

export default IconMaterialDeployedCodeAlert;
