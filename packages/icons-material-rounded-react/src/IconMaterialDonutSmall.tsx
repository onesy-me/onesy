import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDonutSmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutSmall'

      short_name='DonutSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M521-830q0-20 16-32t36-7q112 24 193.5 107T872-564q4 17-7.5 30.5T833-520H602q-4 0-7-2t-5-6q-9-21-25-37.5T529-591q-4-2-6-4.5t-2-6.5v-228Zm80 54v136q11 9 21 19t19 21h136q-24-60-70-106t-106-70ZM389-91q-134-31-221-139T81-480q0-142 87-249.5T389-869q20-5 36 8t16 33v228q0 1-6 8-34 14-54 44.5T361-480q0 37 20 66.5t54 43.5q2 1 6 8v232q0 20-16 32t-36 7Zm-28-685q-91 35-145.5 116T161-480q0 99 54.5 180T361-182v-138q-38-29-59-70.5T281-480q0-48 21-89.5t59-70.5v-136ZM573-91q-20 5-36-7t-16-32v-229q0-4 2-7t6-5q20-9 36-25t25-36q1-2 11-8h232q18 0 30 15t8 34q-25 115-107 196T573-91Zm68-269q-8 11-18.5 21T601-320v136q60-24 106-70t70-106H641ZM281-479Zm360-121Zm0 240Z"/>
    </Icon>
  );
});

IconMaterialDonutSmall.displayName = 'OnesyIconMaterialDonutSmall';

export default IconMaterialDonutSmall;
