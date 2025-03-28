import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSoundSampler = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundSampler'

      short_name='SoundSampler'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-480q0-144 88.5-252T392-870q20-5 34 4t14 28q0 20-13 31.5T394-789q-103 28-168.5 112.5T160-480q0 44 11 84.5t31 75.5q10 17 9.5 34T197-255q-13 13-28 11t-25-18q-31-48-47.5-102.5T80-480ZM480-80q-61 0-116.5-17T260-145q-15-10-17-25.5t10-28.5q13-14 30-14t34 10q36 21 77 32t86 11q45 0 86-11t77-32q17-10 34-10.5t30 13.5q12 13 10 29t-17 26q-48 31-103.5 48T480-80Zm400-400q0 61-16.5 115.5T816-262q-10 16-25 18t-28-11q-14-14-14.5-31t9.5-34q20-35 31-75.5t11-84.5q0-112-65.5-196.5T566-789q-20-6-33-17.5T520-838q0-19 14-28t34-4q135 30 223.5 138T880-480ZM380-337v-286q0-12 10.5-18t20.5 1l223 143q9 6 9 17t-9 17L411-320q-10 7-20.5 1T380-337Z"/>
    </Icon>
  );
});

IconMaterialSoundSampler.displayName = 'OnesyIconMaterialSoundSampler';

export default IconMaterialSoundSampler;
