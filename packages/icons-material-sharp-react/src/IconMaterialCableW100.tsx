import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCableW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CableW100'

      short_name='Cable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-206v-148h80v-326q0-56 39-95t95-39q56 0 95 39t39 95v400q0 45 30.5 75.5T600-174q45 0 75.5-30.5T706-280v-326h-80v-148h40v-60h108v60h40v148h-80v326q0 56-39 95t-95 39q-56 0-95-39t-39-95v-400q0-45-30.5-75.5T360-786q-45 0-75.5 30.5T254-680v326h80v148h-40v60H186v-60h-40Z"/>
    </Icon>
  );
});

IconMaterialCableW100.displayName = 'OnesyIconMaterialCableW100';

export default IconMaterialCableW100;
