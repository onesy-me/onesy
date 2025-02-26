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
      <path d="M240-160q-33 0-56.5-23.5T160-240v-295l-40 31q-14 10-30 8t-26-16q-10-14-7.5-30T72-568l359-275q11-8 23.5-12t25.5-4q13 0 25.5 4t23.5 12l360 275q13 10 15 26.5t-8 29.5q-10 13-26 15t-29-8l-41-30v26q-19-6-39-8.5t-41-2.5q-117 0-198.5 81.5T440-240q0 9 .5 18t1.5 17q2 18-8.5 31.5T406-160H240ZM550-40q-13 0-21.5-8.5T520-70q0-13 8.5-21.5T550-100h27q-26-27-41.5-63T520-240q0-61 33-110.5t87-72.5q11-5 20.5 0t14.5 16q5 11 1 22.5T657-365q-35 17-56 50.5T580-240q0 29 10.5 54t29.5 44v-28q0-13 8.5-21.5T650-200q13 0 21.5 8.5T680-170v90q0 17-11.5 28.5T640-40h-90Zm251-17q-11 5-21 0t-15-16q-5-11-1-22.5t19-19.5q35-18 56-51t21-74q0-29-10.5-54T820-338v28q0 13-8.5 21.5T790-280q-13 0-21.5-8.5T760-310v-90q0-17 11.5-28.5T800-440h90q13 0 21.5 8.5T920-410q0 13-8.5 21.5T890-380h-27q26 27 41.5 63t15.5 77q0 61-33 110.5T801-57Z"/>
    </Icon>
  );
});

IconMaterialWifiHomeFilled.displayName = 'OnesyIconMaterialWifiHomeFilled';

export default IconMaterialWifiHomeFilled;
