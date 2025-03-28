import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotionSensorActive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionSensorActive'

      short_name='MotionSensorActive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-240h80v160h160v80H80Zm0-560v-240h240v80H160v160H80Zm360 436q-92-14-157-79t-79-157h80q12 59 54.5 101.5T440-284v80ZM204-520q14-92 79-157.5T440-756v80q-59 12-101.5 54.5T284-520h-80Zm276 120q-33 0-56.5-23.5T400-480q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T480-400Zm40 196v-80q59-12 101.5-54.5T676-440h80q-13 92-78.5 157T520-204Zm156-316q-12-59-54.5-101.5T520-676v-80q92 14 157.5 79T756-520h-80ZM640-80v-80h160v-160h80v240H640Zm160-560v-160H640v-80h240v240h-80Z"/>
    </Icon>
  );
});

IconMaterialMotionSensorActive.displayName = 'OnesyIconMaterialMotionSensorActive';

export default IconMaterialMotionSensorActive;
