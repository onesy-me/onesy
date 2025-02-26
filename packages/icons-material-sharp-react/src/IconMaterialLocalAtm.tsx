import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalAtm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtm'

      short_name='LocalAtm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280h80v-40h40q17 0 28.5-11.5T600-360v-120q0-17-11.5-28.5T560-520H440v-40h160v-80h-80v-40h-80v40h-40q-17 0-28.5 11.5T360-600v120q0 17 11.5 28.5T400-440h120v40H360v80h80v40ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialLocalAtm.displayName = 'OnesyIconMaterialLocalAtm';

export default IconMaterialLocalAtm;
