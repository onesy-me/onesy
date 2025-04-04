import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicDoubleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicDoubleFilled'

      short_name='MicDouble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-123q-104-14-172-93T40-520h80q0 83 58.5 141.5T320-320h10q5 0 10-1 13 20 28 37.5t32 32.5q-10 3-19.5 4.5T360-243v123h-80Zm20-282q-43-8-71.5-40.5T200-520v-240q0-50 35-85t85-35q50 0 85 35t35 85v160H280v80q0 31 5 60.5t15 57.5Zm340 2q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm-40 280v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T640-320q83 0 141.5-58.5T840-520h80q0 105-68 184t-172 93v123h-80Z"/>
    </Icon>
  );
});

IconMaterialMicDoubleFilled.displayName = 'OnesyIconMaterialMicDoubleFilled';

export default IconMaterialMicDoubleFilled;
