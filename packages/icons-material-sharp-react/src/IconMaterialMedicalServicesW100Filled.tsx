import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalServicesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalServicesW100Filled'

      short_name='MedicalServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-536h240v-108h216v108h240v536H132Zm268-536h160v-80H400v80Zm66 282v120h28v-120h120v-28H494v-120h-28v120H346v28h120Z"/>
    </Icon>
  );
});

IconMaterialMedicalServicesW100Filled.displayName = 'OnesyIconMaterialMedicalServicesW100Filled';

export default IconMaterialMedicalServicesW100Filled;
