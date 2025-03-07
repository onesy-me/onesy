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
      <path d="M466-386v106q0 6 4 10t10 4q6 0 10-4t4-10v-106h106q6 0 10-4t4-10q0-6-4-10t-10-4H494v-106q0-6-4-10t-10-4q-6 0-10 4t-4 10v106H360q-6 0-10 4t-4 10q0 6 4 10t10 4h106ZM192-132q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h180v-48q0-26 17-43t43-17h96q26 0 43 17t17 43v48h180q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm208-508h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48ZM160-160v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMedicalServicesW100.displayName = 'OnesyIconMaterialMedicalServicesW100';

export default IconMaterialMedicalServicesW100;
