import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFireHydrantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireHydrantFilled'

      short_name='FireHydrant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160v-120h-40q-33 0-56.5-23.5T120-360v-80q0-33 23.5-56.5T200-520h40v-120h-40q-17 0-28.5-11.5T160-680q0-17 11.5-28.5T200-720h54q25-70 86.5-115T480-880q78 0 139.5 45T706-720h54q17 0 28.5 11.5T800-680q0 17-11.5 28.5T760-640h-40v120h40q33 0 56.5 23.5T840-440v80q0 33-23.5 56.5T760-280h-40v120h40q17 0 28.5 11.5T800-120q0 17-11.5 28.5T760-80H200q-17 0-28.5-11.5T160-120q0-17 11.5-28.5T200-160h40Zm240-100q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0-80q-25 0-42.5-17.5T420-400q0-25 17.5-42.5T480-460q25 0 42.5 17.5T540-400q0 25-17.5 42.5T480-340Z"/>
    </Icon>
  );
});

IconMaterialFireHydrantFilled.displayName = 'OnesyIconMaterialFireHydrantFilled';

export default IconMaterialFireHydrantFilled;
