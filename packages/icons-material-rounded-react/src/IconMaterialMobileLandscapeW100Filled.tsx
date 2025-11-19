import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileLandscapeW100Filled'

      short_name='MobileLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-252q-26 0-43-17t-17-43v-340q0-24.75 17.63-42.38Q127.25-712 152-712h130q0-14 9.5-25t23.5-11h68q14 0 23.5 11t9.5 25h392q24.75 0 42.38 17.62Q868-676.75 868-652v340q0 24.75-17.62 42.37Q832.75-252 808-252H152Zm76.07-202q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q216-510 208-501.93t-8 20q0 11.93 8.07 19.93t20 8Z"/>
    </Icon>
  );
});

IconMaterialMobileLandscapeW100Filled.displayName = 'OnesyIconMaterialMobileLandscapeW100Filled';

export default IconMaterialMobileLandscapeW100Filled;
