import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightSightMaxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightMaxW100'

      short_name='NightSightMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-666H600q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H734v106q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-106ZM440-174q72 0 130-35t100-98q-143 3-233.5-80T346-600q0-23 3.5-46.5T361-695q-85 29-136 98t-51 157q0 110 78 188t188 78Zm268-146q-35 80-107.37 127-72.36 47-160.66 47Q318-146 232-232t-86-208q0-105.91 66-186.96Q278-708 381-728q5-1 8.5 1t5.5 5q2 3 2.5 6.5T396-707q-11 25.56-16.5 52.28Q374-628 374-600q0 110.83 77.58 188.42Q529.17-334 640-334q13.48 0 25.74-1.5Q678-337 691-339q5-1 8.83.5 3.84 1.5 6.17 4.5 2 3 3 6.5t-1 7.5Zm-271-68Z"/>
    </Icon>
  );
});

IconMaterialNightSightMaxW100.displayName = 'OnesyIconMaterialNightSightMaxW100';

export default IconMaterialNightSightMaxW100;
