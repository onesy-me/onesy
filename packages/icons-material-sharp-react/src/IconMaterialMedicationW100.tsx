import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationW100'

      short_name='Medication'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-312h28v-100h100v-28H494v-100h-28v100H366v28h100v100ZM252-178v-496h456v496H252Zm28-28h400v-440H280v440Zm-16-548v-28h432v28H264Zm16 108v440-440Z"/>
    </Icon>
  );
});

IconMaterialMedicationW100.displayName = 'OnesyIconMaterialMedicationW100';

export default IconMaterialMedicationW100;
