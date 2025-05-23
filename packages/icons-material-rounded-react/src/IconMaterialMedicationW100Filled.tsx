import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationW100Filled'

      short_name='Medication'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-412v86q0 5.83 4.12 9.92 4.12 4.08 10 4.08t9.88-4.08q4-4.09 4-9.92v-86h86q5.83 0 9.92-4.12 4.08-4.12 4.08-10t-4.08-9.88q-4.09-4-9.92-4h-86v-86q0-5.83-4.12-9.92-4.12-4.08-10-4.08t-9.88 4.08q-4 4.09-4 9.92v86h-86q-5.83 0-9.92 4.12-4.08 4.12-4.08 10t4.08 9.88q4.09 4 9.92 4h86ZM312-178q-24.75 0-42.37-17.63Q252-213.25 252-238v-376q0-24.75 17.63-42.38Q287.25-674 312-674h336q24.75 0 42.38 17.62Q708-638.75 708-614v376q0 24.75-17.62 42.37Q672.75-178 648-178H312Zm-34-576q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h404q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H278Z"/>
    </Icon>
  );
});

IconMaterialMedicationW100Filled.displayName = 'OnesyIconMaterialMedicationW100Filled';

export default IconMaterialMedicationW100Filled;
