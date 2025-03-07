import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalHospitalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalHospitalW100Filled'

      short_name='LocalHospital'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M459-459v132q0 8.75 6.18 14.87 6.17 6.13 15 6.13 8.82 0 14.82-6.13 6-6.12 6-14.87v-132h132q8.75 0 14.88-6.18 6.12-6.17 6.12-15 0-8.82-6.12-14.82-6.13-6-14.88-6H501v-132q0-8.75-6.18-14.88-6.17-6.12-15-6.12-8.82 0-14.82 6.12-6 6.13-6 14.88v132H327q-8.75 0-14.87 6.18-6.13 6.17-6.13 15 0 8.82 6.13 14.82 6.12 6 14.87 6h132ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialLocalHospitalW100Filled.displayName = 'OnesyIconMaterialLocalHospitalW100Filled';

export default IconMaterialLocalHospitalW100Filled;
