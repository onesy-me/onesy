import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdminMedsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdminMedsFilled'

      short_name='AdminMeds'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480ZM328-329q29 29 68.5 29.5T465-328l56-56-137-137-56 56q-29 29-29 68t29 68Zm304-302q-29-28-68.5-29T495-632l-55 55 137 137 55-55q29-29 28.5-68T632-631ZM120-120v-720h248q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h248v720H120Zm360-670q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790Z"/>
    </Icon>
  );
});

IconMaterialAdminMedsFilled.displayName = 'OnesyIconMaterialAdminMedsFilled';

export default IconMaterialAdminMedsFilled;
