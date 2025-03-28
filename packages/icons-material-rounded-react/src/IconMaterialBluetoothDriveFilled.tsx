import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBluetoothDriveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDriveFilled'

      short_name='BluetoothDrive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-320q25 0 42.5-17.5T320-380q0-25-17.5-42.5T260-440q-25 0-42.5 17.5T200-380q0 25 17.5 42.5T260-320Zm360 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-25 0-42.5 17.5T560-380q0 25 17.5 42.5T620-320ZM200-200v20q0 25-17.5 42.5T140-120q-25 0-42.5-17.5T80-180v-286q0-7 1-14t3-13l75-213q8-24 29-39t47-15h325q17 0 28.5 11.5T600-720q0 17-11.5 28.5T560-680H234l-42 120h375q18 0 27.5 15.5T614-514q11 17 28.5 25.5T680-480h80q17 0 28.5 11.5T800-440v260q0 25-17.5 42.5T740-120q-25 0-42.5-17.5T680-180v-20H200Zm538-520-98-98q-6-6-6-14t6-14q6-6 14-6t14 6l78 78v-123q0-14 12-19t22 5l86 87q6 6 6 14t-6 14l-72 70 72 72q6 6 6 14t-6 14l-86 86q-10 10-22 5t-12-19v-124l-78 78q-6 6-14 6t-14-6q-6-6-6-14t6-14l98-98Zm48-48 38-36-38-38v74Zm0 172 38-38-38-38v76Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDriveFilled.displayName = 'OnesyIconMaterialBluetoothDriveFilled';

export default IconMaterialBluetoothDriveFilled;
