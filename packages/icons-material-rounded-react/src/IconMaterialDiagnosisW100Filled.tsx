import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiagnosisW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiagnosisW100Filled'

      short_name='Diagnosis'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-266h240q6 0 10-4t4-10q0-6-4-10t-10-4H360q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-100h240q6 0 10-4t4-10q0-6-4-10t-10-4H360q-6 0-10 4t-4 10q0 6 4 10t10 4Zm120-280q-17-21-30-34.5T408-694q-26 0-44 18t-18 44q0 48 41 82.5t73 63.5q8 8 20 8t20-8q32-28 73-63t41-83q0-26-18-44t-44-18q-29 0-42 13.5T480-646Zm208 514H272q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576q0 26-17 43t-43 17Z"/>
    </Icon>
  );
});

IconMaterialDiagnosisW100Filled.displayName = 'OnesyIconMaterialDiagnosisW100Filled';

export default IconMaterialDiagnosisW100Filled;
