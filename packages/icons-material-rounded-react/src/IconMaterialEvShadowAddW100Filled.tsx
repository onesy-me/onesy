import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvShadowAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvShadowAddW100Filled'

      short_name='EvShadowAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M463-132q-66 0-124.5-28T234-234q-49-49-75.5-113T132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q141 0 241.5 97T828-494q0 6-4 10t-10 4q-6 0-10-4t-4-10q-2-40-13-78t-32-72L405-294q18 25 40 45.5t48 37.5q12 8 16 21t0 27q-5 18-18 24.5t-28 6.5Zm-73-186 349-350q-16-22-34.5-40.5T664-742L349-427q5 29 15.5 56.5T390-318Zm-45-145 294-294q-15-9-31-16.5T575-786q-107 32-171.5 121.5T345-463Zm349 307q-6 0-10-4t-4-10v-106H574q-6 0-10-4t-4-10q0-6 4-10t10-4h106v-106q0-6 4-10t10-4q6 0 10 4t4 10v106h106q6 0 10 4t4 10q0 6-4 10t-10 4H708v106q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialEvShadowAddW100Filled.displayName = 'OnesyIconMaterialEvShadowAddW100Filled';

export default IconMaterialEvShadowAddW100Filled;
