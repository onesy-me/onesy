import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoundaboutRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutRightW100'

      short_name='RoundaboutRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M333-186v-174q0-8-6-14.5t-14-8.5q-77-13-129-68.5T132-584q0-85 60-144.5T337-788q77 0 133 51.5T539-608q2 8 8 14t14 6h213l-80-80q-4-4-4.5-9.5T694-688q5-5 10-5t10 5l93 93q5 5 7 10t2 11q0 6-2 11t-7 10l-93 93q-4 4-9.5 4.5T694-460q-5-5-5-10t5-10l80-80H563q-20 0-35-13t-18-33q-11-66-59-110t-114-44q-73 0-125 51.5T160-584q0 66 44.5 114T315-411q20 3 33 18t13 35v172q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutRightW100.displayName = 'OnesyIconMaterialRoundaboutRightW100';

export default IconMaterialRoundaboutRightW100;
