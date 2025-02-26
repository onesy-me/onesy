import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOverviewKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OverviewKeyW100Filled'

      short_name='OverviewKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M140-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h336q26 0 43 17t17 43v336q0 26-17 43t-43 17H140Zm553.96 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-428q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v428q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm172 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-428q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v428q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialOverviewKeyW100Filled.displayName = 'OnesyIconMaterialOverviewKeyW100Filled';

export default IconMaterialOverviewKeyW100Filled;
