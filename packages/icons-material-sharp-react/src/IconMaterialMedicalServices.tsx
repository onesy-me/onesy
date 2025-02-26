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
      <path d="M80-80v-640h240v-160h320v160h240v640H80Zm80-80h640v-480H160v480Zm240-560h160v-80H400v80ZM160-160v-480 480Zm280-200v120h80v-120h120v-80H520v-120h-80v120H320v80h120Z"/>
    </Icon>
  );
});

IconMaterialMedicalServices.displayName = 'OnesyIconMaterialMedicalServices';

export default IconMaterialMedicalServices;
