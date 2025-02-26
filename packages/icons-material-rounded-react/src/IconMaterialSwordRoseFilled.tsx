import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwordRoseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwordRoseFilled'

      short_name='SwordRose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-840v103q0 8-3 15.5t-9 13.5L672-512q-12 12-28 12t-28-12L512-616q-12-12-12-28t12-28l196-196q6-6 13.5-9t15.5-3h103q17 0 28.5 11.5T880-840ZM142-92l-50-50q-12-12-12-28t12-28l116-117-60-60q-11-11-11-28t11-28q23-23 57-23t57 23l4 5 20-20q12-12 28-12t28 12l104 104q12 12 12 28t-12 28l-20 20 5 4q23 23 23 57t-23 57q-11 11-28 11t-28-11l-60-60L198-92q-12 12-28 12t-28-12Zm668-1L357-544q-49 30-107 23.5T150-569l-25-25 27-28q26-27 63.5-26.5T279-622l78 78q9-5 17-11.5t16-14.5q7-7 13-15t11-16l-78-78q-51-50-121-50T96-678l-27 27-1-1q-12-12-12-28t12-28l184-183q12-12 28-12t28 12l82 82q43 43 48.5 101T414-601l289 289q-8-26-10-54t3-56q11-51 43-92t76-67q14-8 29.5-5t24.5 16q29 41 43.5 91t3.5 101q-11 51-42.5 91T797-218l69 69q11 11 11.5 27.5T866-93q-11 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialSwordRoseFilled.displayName = 'OnesyIconMaterialSwordRoseFilled';

export default IconMaterialSwordRoseFilled;
