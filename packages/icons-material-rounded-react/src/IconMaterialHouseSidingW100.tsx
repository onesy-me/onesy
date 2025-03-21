import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouseSidingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseSidingW100'

      short_name='HouseSiding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M264-292v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-387l-116 86q-5 3-10 2.5t-9-5.5q-4-5-3.5-10t5.5-9l341-253q8-6 17.21-8.5T480-773q9.58 0 18.79 2.5Q508-768 516-762l342 253q5 4 5.5 9t-3.5 10q-4 5-9 5.5t-10-2.5l-116-86v387q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106H264Zm0-176h433v-120H264v120Zm0 148h433v-120H264v120Zm30-296h372L480-753 294-616Z"/>
    </Icon>
  );
});

IconMaterialHouseSidingW100.displayName = 'OnesyIconMaterialHouseSidingW100';

export default IconMaterialHouseSidingW100;
