import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalServices = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalServices'

      short_name='MedicalServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-360v80q0 17 11.5 28.5T480-240q17 0 28.5-11.5T520-280v-80h80q17 0 28.5-11.5T640-400q0-17-11.5-28.5T600-440h-80v-80q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520v80h-80q-17 0-28.5 11.5T320-400q0 17 11.5 28.5T360-360h80ZM160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H160Zm0-80h640v-480H160v480Zm240-560h160v-80H400v80ZM160-160v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMedicalServices.displayName = 'OnesyIconMaterialMedicalServices';

export default IconMaterialMedicalServices;
