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
      <path d="M346-266h268v-28H346v28Zm0-100h268v-28H346v28Zm134-103q60-54 97-84.5t37-78.5q0-26-18-44t-44-18q-29 0-42 13.5T480-646q-17-21-30-34.5T408-694q-26 0-44 18t-18 44q0 48 35.5 77t98.5 86ZM212-132v-696h536v696H212Z"/>
    </Icon>
  );
});

IconMaterialDiagnosisW100Filled.displayName = 'OnesyIconMaterialDiagnosisW100Filled';

export default IconMaterialDiagnosisW100Filled;
