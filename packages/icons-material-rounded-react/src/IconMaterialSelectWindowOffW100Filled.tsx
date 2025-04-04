import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectWindowOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectWindowOffW100Filled'

      short_name='SelectWindowOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M842-78 470-450H160v248q0 12 10 22t22 10h416q12 0 22-10t10-22v-118l28 28v90q0 25-17.5 42.5T608-142H192q-25 0-42.5-17.5T132-202v-296q0-25 17.5-42.5T192-558h100v-70L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5Zm-14-680v296q0 25-17.5 42.5T768-402h-73q-12 0-23.5-5T652-420l-87-87q-7-7-8-15.5t2-16.5q3-8 10-13.5t17-5.5h22q26 0 43 17t17 43v68h100q12 0 22-10t10-22v-248H387q-12 0-23.5-5T344-728l-39-39q-7-7-8-15.5t2-16.5q3-8 10-13.5t17-5.5h442q25 0 42.5 17.5T828-758Z"/>
    </Icon>
  );
});

IconMaterialSelectWindowOffW100Filled.displayName = 'OnesyIconMaterialSelectWindowOffW100Filled';

export default IconMaterialSelectWindowOffW100Filled;
