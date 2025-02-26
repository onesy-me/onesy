import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotionSensorAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionSensorAlertFilled'

      short_name='MotionSensorAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-120q0-17 11.5-28.5T120-400q17 0 28.5 11.5T160-360v120h120q17 0 28.5 11.5T320-200q0 17-11.5 28.5T280-160H160ZM80-760v-120q0-33 23.5-56.5T160-960h120q17 0 28.5 11.5T320-920q0 17-11.5 28.5T280-880H160v120q0 17-11.5 28.5T120-720q-17 0-28.5-11.5T80-760Zm400 280q-33 0-56.5-23.5T400-560q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T480-480Zm320-280v-120H680q-17 0-28.5-11.5T640-920q0-17 11.5-28.5T680-960h120q33 0 56.5 23.5T880-880v120q0 17-11.5 28.5T840-720q-17 0-28.5-11.5T800-760ZM247-514q-18 0-28 15.5t-5 33.5q19 63 66 109t110 67q18 6 33.5-5.5T439-325q0-14-9-25.5T407-367q-39-15-69.5-44T293-480q-5-15-17.5-24.5T247-514Zm1-80q-18 0-28-15.5t-5-33.5q19-63 66.5-109T392-819q18-6 33 5.5t15 30.5q0 14-9 25.5T408-741q-39 15-69.5 44T294-628q-5 15-17.5 24.5T248-594Zm466 0q18 0 28-15.5t5-33.5q-19-63-66.5-109T570-819q-18-6-33 5.5T522-783q0 14 9 25.5t23 16.5q39 15 69.5 44t44.5 69q5 15 17.5 24.5T714-594Zm46 514q-83 0-141.5-58.5T560-280q0-83 58.5-141.5T760-480q83 0 141.5 58.5T960-280q0 83-58.5 141.5T760-80Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialMotionSensorAlertFilled.displayName = 'OnesyIconMaterialMotionSensorAlertFilled';

export default IconMaterialMotionSensorAlertFilled;
