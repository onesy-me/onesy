import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVibrationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VibrationW100Filled'

      short_name='Vibration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M90.04-574q5.96 0 9.96 4.03 4 4.02 4 9.97v160q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-160q0-5.95 4.04-9.97 4.03-4.03 10-4.03Zm108-80q5.96 0 9.96 4.03 4 4.02 4 9.97v320q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-320q0-5.95 4.04-9.97 4.03-4.03 10-4.03Zm672 80q5.96 0 9.96 4.03 4 4.02 4 9.97v160q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-160q0-5.95 4.04-9.97 4.03-4.03 10-4.03Zm-108-80q5.96 0 9.96 4.03 4 4.02 4 9.97v320q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-320q0-5.95 4.04-9.97 4.03-4.03 10-4.03ZM352-172q-24.75 0-42.37-17.63Q292-207.25 292-232v-496q0-24.75 17.63-42.38Q327.25-788 352-788h256q24.75 0 42.38 17.62Q668-752.75 668-728v496q0 24.75-17.62 42.37Q632.75-172 608-172H352Z"/>
    </Icon>
  );
});

IconMaterialVibrationW100Filled.displayName = 'OnesyIconMaterialVibrationW100Filled';

export default IconMaterialVibrationW100Filled;
