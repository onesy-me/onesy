import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabsW100'

      short_name='Labs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-69 0-117.5-47T314-294v-364q-26 0-44-17.5T252-719v-47q0-26 18-44t44-18h331q26 0 44.5 18t18.5 44v47q0 26-18.5 43.5T645-658v379q-6 63-53.5 105T480-132ZM314-686h331q14 0 24.5-9.5T680-719v-47q0-14-10.5-24T645-800H314q-14 0-24 10t-10 24v47q0 14 10 23.5t24 9.5Zm166 526q57 0 97-38.5t40-95.5v-39H501q-6 0-10-4t-4-10q0-6 4-10t10-4h116v-124H501q-6 0-10-4t-4-10q0-6 4-10t10-4h116v-145H342v364q0 57 40.5 95.5T480-160ZM280-686v-114 114Z"/>
    </Icon>
  );
});

IconMaterialLabsW100.displayName = 'OnesyIconMaterialLabsW100';

export default IconMaterialLabsW100;
