import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalServicesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalServicesW100'

      short_name='MedicalServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-536h240v-108h216v108h240v536H132Zm28-28h640v-480H160v480Zm240-508h160v-80H400v80ZM160-160v-480 480Zm306-226v120h28v-120h120v-28H494v-120h-28v120H346v28h120Z"/>
    </Icon>
  );
});

IconMaterialMedicalServicesW100.displayName = 'OnesyIconMaterialMedicalServicesW100';

export default IconMaterialMedicalServicesW100;
