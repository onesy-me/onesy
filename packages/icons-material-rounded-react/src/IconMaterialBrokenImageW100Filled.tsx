import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrokenImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageW100Filled'

      short_name='BrokenImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-216l47 47q9 9 21 9t21-9l139-139 139 139q9 9 21 9t21-9l139-139 68 68v240q0 26-17 43t-43 17H232Zm0-616h496q26 0 43 17t17 43v216l-47-47q-9-9-21-9t-21 9L560-420 421-559q-9-9-21-9t-21 9L240-420l-68-68v-240q0-26 17-43t43-17Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageW100Filled.displayName = 'OnesyIconMaterialBrokenImageW100Filled';

export default IconMaterialBrokenImageW100Filled;
