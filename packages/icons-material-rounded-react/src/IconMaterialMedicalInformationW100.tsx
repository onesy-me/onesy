import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalInformationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalInformationW100'

      short_name='MedicalInformation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M316-346v66q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-66h66q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4h-66v-66q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v66h-66q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h66Zm218-44h186q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4H534q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4Zm0 88h106q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4H534q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4ZM192-132q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h220v-172q0-11.55 8.23-19.78Q428.45-828 440-828h80q11.55 0 19.78 8.22Q548-811.55 548-800v172h220q26 0 43 17t17 43v376q0 26-17 43t-43 17H192Zm0-28h576q14 0 23-9t9-23v-376q0-14-9-23t-23-9H548v40q0 11-8.5 19.5T520-532h-80q-11 0-19.5-8.5T412-560v-40H192q-14 0-23 9t-9 23v376q0 14 9 23t23 9Zm248-400h80v-240h-80v240Zm40 180Z"/>
    </Icon>
  );
});

IconMaterialMedicalInformationW100.displayName = 'OnesyIconMaterialMedicalInformationW100';

export default IconMaterialMedicalInformationW100;
