import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalInformationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalInformationFilled'

      short_name='MedicalInformation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm240-140h240v-60H520v60Zm0 120h160v-60H520v60ZM80-80v-600h280v-200h240v200h280v600H80Zm360-520h80v-200h-80v200Z"/>
    </Icon>
  );
});

IconMaterialMedicalInformationFilled.displayName = 'OnesyIconMaterialMedicalInformationFilled';

export default IconMaterialMedicalInformationFilled;
