import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMusicOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicOffFilled'

      short_name='MusicOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M764-84 84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM560-680v70q0 20-12.5 29.5T520-571q-15 0-27.5-10T480-611v-189q0-17 11.5-28.5T520-840h160q17 0 28.5 11.5T720-800v80q0 17-11.5 28.5T680-680H560ZM400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-62l80 80v120q0 66-47 113t-113 47Z"/>
    </Icon>
  );
});

IconMaterialMusicOffFilled.displayName = 'OnesyIconMaterialMusicOffFilled';

export default IconMaterialMusicOffFilled;
