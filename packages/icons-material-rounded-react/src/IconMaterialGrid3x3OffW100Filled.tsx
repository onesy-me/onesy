import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGrid3x3OffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3OffW100Filled'

      short_name='Grid3x3Off'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m702-372-28-28h60q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-32ZM588-486 486-588h74v-146q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v146h146q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H588v74ZM400-674l-28-28v-32q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v60Zm160 314-12-12H400v146q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-146H226q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h146v-148l-12-12H226q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h106L140-780q-4-4-4.5-9.5T140-800q5-5 10-5t10 5l658 658q4 4 4.5 9.5T818-122q-5 5-10 5t-10-5L588-332v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-134Z"/>
    </Icon>
  );
});

IconMaterialGrid3x3OffW100Filled.displayName = 'OnesyIconMaterialGrid3x3OffW100Filled';

export default IconMaterialGrid3x3OffW100Filled;
