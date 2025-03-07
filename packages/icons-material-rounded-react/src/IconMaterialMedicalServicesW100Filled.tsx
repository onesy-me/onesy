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
      <path d="M192-132q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h180v-48q0-26 17-43t43-17h96q26 0 43 17t17 43v48h180q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm208-536h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48Zm66 282v106q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-106h106q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H494v-106q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v106H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h106Z"/>
    </Icon>
  );
});

IconMaterialMedicalServicesW100Filled.displayName = 'OnesyIconMaterialMedicalServicesW100Filled';

export default IconMaterialMedicalServicesW100Filled;
