import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdsClickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdsClickW100'

      short_name='AdsClick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-640q-66 0-113 47t-47 113q0 52 30.5 93.5T430-328q5 2 8 7.5t1 10.5q-2 5-6.5 8t-9.5 1q-59-19-95-68t-36-111q0-78 55-133t133-55q61 0 110.5 36t68.5 94q2 5-1.5 10t-8.5 7q-6 2-11-1t-7-9q-17-49-58.5-79T480-640Zm0-160q-134 0-227 93t-93 227q0 136 92 228t226 92q6 0 10 4t4 10q0 6-4 10.5t-10 4.5q-74 0-137-29t-109.5-77q-46.5-48-73-111T132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q138 0 243 98.5T829-483q0 6-4 10.5t-10 4.5q-6 0-10.5-4.5T800-483q0-128-94.5-222.5T480-800Zm286 636L583-348l-18 55q-4 11-15 11t-14-11l-48-160q-2-9 4-15t15-4l160 48q11 3 11 14t-11 15l-55 18 184 183q6 6 6 15t-6 15q-6 6-15 6t-15-6Z"/>
    </Icon>
  );
});

IconMaterialAdsClickW100.displayName = 'OnesyIconMaterialAdsClickW100';

export default IconMaterialAdsClickW100;
