import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeOffOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeOffOnW100'

      short_name='ModeOffOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.96-480q-5.96 0-9.96-4.02-4-4.03-4-9.98v-328q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v328q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm.1 308Q416-172 360-196t-98-66q-42-42-66-97.96-24-55.96-24-120.04 0-58 21.5-111.5T254-687q3.67-5 9.33-4.5 5.67.5 10.55 5.37Q278-682 277-677q-1 5-5 10-35 38-53.5 86.5T200-480q0 117 81.5 198.5T480-200q117 0 198.5-81.5T760-480q0-51.53-18.5-100.27Q723-629 688-667q-4-5-5-10.54-1-5.53 3-9.46 5-5 10.5-5t9.5 5q39 42 60.5 95.44Q788-538.13 788-480q0 64.08-24 120.04Q740-304 698-262q-42 42-97.94 66-55.95 24-120 24Z"/>
    </Icon>
  );
});

IconMaterialModeOffOnW100.displayName = 'OnesyIconMaterialModeOffOnW100';

export default IconMaterialModeOffOnW100;
