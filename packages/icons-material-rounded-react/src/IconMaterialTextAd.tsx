import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextAd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextAd'

      short_name='TextAd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Zm80-40h480q17 0 28.5-11.5T760-320q0-17-11.5-28.5T720-360H240q-17 0-28.5 11.5T200-320q0 17 11.5 28.5T240-280Zm0-160h480q17 0 28.5-11.5T760-480q0-17-11.5-28.5T720-520H240q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm0-160h320q17 0 28.5-11.5T600-640q0-17-11.5-28.5T560-680H240q-17 0-28.5 11.5T200-640q0 17 11.5 28.5T240-600Z"/>
    </Icon>
  );
});

IconMaterialTextAd.displayName = 'OnesyIconMaterialTextAd';

export default IconMaterialTextAd;
