import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadsetMicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetMicW100Filled'

      short_name='HeadsetMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-212q-26 0-43-17t-17-43v-248q0-63.53 24-119.77Q220-696 262-738q42-42 98.23-66 56.24-24 119.77-24 63.53 0 119.77 24Q656-780 698-738q42 42 66 98.23 24 56.24 24 119.77v336q0 26-17 43t-43 17H494q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h234q14 0 23-9t9-23v-28h-52q-24.75 0-42.37-17.63Q648-247.25 648-272v-104q0-24.75 17.63-42.38Q683.25-436 708-436h52v-84q0-116-82-198t-198-82q-116 0-198 82t-82 198v84h52q24.75 0 42.38 17.62Q312-400.75 312-376v104q0 24.75-17.62 42.37Q276.75-212 252-212h-20Z"/>
    </Icon>
  );
});

IconMaterialHeadsetMicW100Filled.displayName = 'OnesyIconMaterialHeadsetMicW100Filled';

export default IconMaterialHeadsetMicW100Filled;
