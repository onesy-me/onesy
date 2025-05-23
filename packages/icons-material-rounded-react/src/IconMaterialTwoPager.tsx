import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTwoPager = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TwoPager'

      short_name='TwoPager'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h280v-480H160v480Zm360 0h280v-480H520v480Zm-280-80h120q17 0 28.5-11.5T400-360q0-17-11.5-28.5T360-400H240q-17 0-28.5 11.5T200-360q0 17 11.5 28.5T240-320Zm0-120h120q17 0 28.5-11.5T400-480q0-17-11.5-28.5T360-520H240q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm0-120h120q17 0 28.5-11.5T400-600q0-17-11.5-28.5T360-640H240q-17 0-28.5 11.5T200-600q0 17 11.5 28.5T240-560Zm360 240h120q17 0 28.5-11.5T760-360q0-17-11.5-28.5T720-400H600q-17 0-28.5 11.5T560-360q0 17 11.5 28.5T600-320Zm0-120h120q17 0 28.5-11.5T760-480q0-17-11.5-28.5T720-520H600q-17 0-28.5 11.5T560-480q0 17 11.5 28.5T600-440Zm0-120h120q17 0 28.5-11.5T760-600q0-17-11.5-28.5T720-640H600q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM440-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTwoPager.displayName = 'OnesyIconMaterialTwoPager';

export default IconMaterialTwoPager;
