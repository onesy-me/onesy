import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatDashedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatDashedW100'

      short_name='ChatDashed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-490v-140h28v140h-28Zm0 310v-210h28v142l72-72h78v28h-66L132-180Zm278-112v-28h140v28H410Zm240 0v-28h150v-70h28v98H650Zm150-198v-140h28v140h-28Zm0-240v-70H650v-28h178v98h-28Zm-390-70v-28h140v28H410Zm-278 70v-98h178v28H160v70h-28Z"/>
    </Icon>
  );
});

IconMaterialChatDashedW100.displayName = 'OnesyIconMaterialChatDashedW100';

export default IconMaterialChatDashedW100;
