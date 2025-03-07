import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeOffW100Filled'

      short_name='VolumeOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M638-224q-8 5-17 10t-18 9q-5 2-11.5 0t-8.5-7q-2-5 1-10.5t8-7.5q10-4 18.5-9t16.5-12L458-404v82q0 10-9.5 13.5T432-312L332-412H232q-13 0-21.5-8.5T202-442v-76q0-13 8.5-21.5T232-548h82L128-734q-4-4-4.5-9.5T128-754q5-5 10-5t10 5l620 620q4 4 4.5 9.5T768-114q-5 5-10 5t-10-5L638-224Zm120-257q0-81-44.5-149T594-731q-6-3-9-8t0-10q3-6 10-7t14 2q80 38 128.5 111T786-481q0 47-13.5 89.5T733-312q-5 7-10.5 8t-10.5-1q-5-2-6.5-7t1.5-10q25-35 38-74.5t13-84.5ZM600-587q20 22 29 50t9 57q0 15-2.5 29.5T628-422q-4 9-13.5 10.5T598-417l-11-11q-5-5-7-10t-2-11v-128q0-8 8-11.5t14 1.5Zm-190-18q-5-5-4.5-11t5.5-11l21-21q7-7 16.5-3.5T458-638v44q0 10-9.5 14.5T432-583l-22-22Z"/>
    </Icon>
  );
});

IconMaterialVolumeOffW100Filled.displayName = 'OnesyIconMaterialVolumeOffW100Filled';

export default IconMaterialVolumeOffW100Filled;
