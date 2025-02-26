import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationFilled'

      short_name='Medication'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-260h120v-100h100v-120H540v-100H420v100H320v120h100v100ZM200-120v-600h560v600H200Zm40-640v-80h480v80H240Z"/>
    </Icon>
  );
});

IconMaterialMedicationFilled.displayName = 'OnesyIconMaterialMedicationFilled';

export default IconMaterialMedicationFilled;
