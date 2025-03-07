import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileMapW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileMapW100Filled'

      short_name='FileMap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm248-483q-56 0-98 38.5t-42 104.82q0 53.2 42 104.94Q424-355 460-323q4.5 4 9.75 6t10.25 2q5 0 10-2t10-6q37-32 78.5-83.74Q620-458.48 620-511.68q0-66.32-42-104.82T480-655Zm-.14 183q-16.86 0-28.36-11.64t-11.5-28.5q0-16.86 11.64-28.36t28.5-11.5q16.86 0 28.36 11.64t11.5 28.5q0 16.86-11.64 28.36t-28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialFileMapW100Filled.displayName = 'OnesyIconMaterialFileMapW100Filled';

export default IconMaterialFileMapW100Filled;
