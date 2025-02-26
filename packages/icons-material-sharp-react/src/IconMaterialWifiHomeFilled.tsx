import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiHomeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiHomeFilled'

      short_name='WifiHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160v-375l-72 55-48-64 440-336 440 336-48 63-72-54v26q-19-6-39-8.5t-41-2.5q-117 0-198.5 81.5T440-240q0 20 3 40t9 40H160ZM680-40H520v-60h57q-26-27-41.5-63T520-240q0-72 45.5-127T680-436v62q-44 13-72 49.5T580-240q0 29 10.5 54t29.5 44v-58h60v160Zm80-4v-62q45-14 72.5-50.5T860-240q0-29-10.5-54T820-338v58h-60v-160h160v60h-57q26 27 41.5 63t15.5 77q0 72-45.5 127T760-44Z"/>
    </Icon>
  );
});

IconMaterialWifiHomeFilled.displayName = 'OnesyIconMaterialWifiHomeFilled';

export default IconMaterialWifiHomeFilled;
