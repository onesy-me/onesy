import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestWakeOnPressW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressW100'

      short_name='NestWakeOnPress'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M772-494v-254h56v254h-56ZM305-172 122-354l30-30 155 34v-390q0-20.16 13.89-34.08 13.88-13.92 34-13.92Q375-788 389-774.08T403-740v212h46l195 86-47 270H305Zm12-28h256l39-225-167-75h-70v-240.25q0-8.75-5.5-14.25T355-760q-9 0-14.5 5.5T335-740v424l-173-38 155 154Zm0 0h253-253Z"/>
    </Icon>
  );
});

IconMaterialNestWakeOnPressW100.displayName = 'OnesyIconMaterialNestWakeOnPressW100';

export default IconMaterialNestWakeOnPressW100;
