import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRampLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampLeftFilled'

      short_name='RampLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-160v-527l-36 36q-11 11-27.5 11T348-652q-11-11-11-28t11-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q11 11 11.5 27.5T612-652q-11 11-28 11t-28-11l-36-35v87q0 109 68.5 186.5T720-294q15 10 18.5 26.5T731-240q-14 14-32.5 15T664-235q-45-31-80.5-65T520-372v212q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Z"/>
    </Icon>
  );
});

IconMaterialRampLeftFilled.displayName = 'OnesyIconMaterialRampLeftFilled';

export default IconMaterialRampLeftFilled;
