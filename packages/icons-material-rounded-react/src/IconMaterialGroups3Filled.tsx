import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroups3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Groups3Filled'

      short_name='Groups3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m160-419 101-101-101-101L59-520l101 101Zm540-21 100-160 100 160H700Zm-220-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480ZM0-280v-23q0-44 44.5-70.5T160-400q13 0 25 .5t23 2.5q-14 20-21 43t-7 49v65H40q-17 0-28.5-11.5T0-280Zm240 0v-25q0-65 66.5-105T480-450q108 0 174 40t66 105v25q0 17-11.5 28.5T680-240H280q-17 0-28.5-11.5T240-280Zm560-120q72 0 116 26.5t44 70.5v23q0 17-11.5 28.5T920-240H780v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5Z"/>
    </Icon>
  );
});

IconMaterialGroups3Filled.displayName = 'OnesyIconMaterialGroups3Filled';

export default IconMaterialGroups3Filled;
