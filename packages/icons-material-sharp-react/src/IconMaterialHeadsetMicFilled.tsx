import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadsetMicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetMicFilled'

      short_name='HeadsetMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-40v-80h280v-40H600v-320h160v-40q0-116-82-198t-198-82q-116 0-198 82t-82 198v40h160v320H120v-360q0-74 28.5-139.5T226-774q49-49 114.5-77.5T480-880q74 0 139.5 28.5T734-774q49 49 77.5 114.5T840-520v480H480Z"/>
    </Icon>
  );
});

IconMaterialHeadsetMicFilled.displayName = 'OnesyIconMaterialHeadsetMicFilled';

export default IconMaterialHeadsetMicFilled;
