import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamilyHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyHomeW100Filled'

      short_name='FamilyHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-774 366 274-18 22-80-60v366H212v-366l-80 60-18-22 366-274ZM354-456.25Q354-420 393-379t87 85q50-44 89-84.92t39-77.07Q608-486 587.38-506q-20.63-20-49.5-20-17.88 0-32.38 7.5Q491-511 480-500q-9-11-24-18.5t-31.57-7.5q-29 0-49.72 19.83Q354-486.34 354-456.25Z"/>
    </Icon>
  );
});

IconMaterialFamilyHomeW100Filled.displayName = 'OnesyIconMaterialFamilyHomeW100Filled';

export default IconMaterialFamilyHomeW100Filled;
