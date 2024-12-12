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
      <path d="M480-124v-28h280v-60H648v-224h112v-84q0-116-82-198t-198-82q-116 0-198 82t-82 198v84h112v224H172v-308.39q0-63.39 24-119.5T262-738q42-42 98.23-66 56.24-24 119.77-24 63.53 0 119.77 24Q656-780 698-738q42 42 66 98.23 24 56.24 24 119.77v396H480Z"/>
    </Icon>
  );
});

IconMaterialHeadsetMicW100Filled.displayName = 'OnesyIconMaterialHeadsetMicW100Filled';

export default IconMaterialHeadsetMicW100Filled;
