import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadsetOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetOffW100Filled'

      short_name='HeadsetOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-317q0 11-10 15t-18-4L657-408q-8-8-4-18t15-10h92v-84q0-116-82-198t-198-82q-44 0-86.5 14T318-748l-20-20q30-24 78-42t104-18q64 0 120 24t98 66q42 42 66 98t24 120v203ZM494-124q-6 0-10-4t-4-10q0-6 4-10t10-4h266l-60-60h-12q-25 0-42.5-17.5T628-272v-12L242-670q-18 30-30 70.5T200-520v84h68q25 0 42.5 17.5T328-376v104q0 25-17.5 42.5T268-212h-36q-26 0-43-17t-17-43v-248q0-48 13.5-91t36.5-79L70-842q-4-4-4.5-9.5T70-862q5-5 10-5t10 5l700 700q11 11 5 24.5T774-124H494Z"/>
    </Icon>
  );
});

IconMaterialHeadsetOffW100Filled.displayName = 'OnesyIconMaterialHeadsetOffW100Filled';

export default IconMaterialHeadsetOffW100Filled;
