import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighQualityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighQualityW100'

      short_name='HighQuality'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M590-376v46q0 6 4 10t10 4q6 0 10-4t4-10v-46h26q18 0 31-13t13-31v-120q0-18-13-31t-31-13h-80q-18 0-31 13t-13 31v120q0 18 13 31t31 13h26Zm-290-80h112v66q0 6 4 10t10 4q6 0 10-4t4-10v-180q0-6-4-10t-10-4q-6 0-10 4t-4 10v86H300v-86q0-6-4-10t-10-4q-6 0-10 4t-4 10v180q0 6 4 10t10 4q6 0 10-4t4-10v-66Zm264 52q-6 0-11-5t-5-11v-120q0-6 5-11t11-5h80q6 0 11 5t5 11v120q0 6-5 11t-11 5h-80ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialHighQualityW100.displayName = 'OnesyIconMaterialHighQualityW100';

export default IconMaterialHighQualityW100;
