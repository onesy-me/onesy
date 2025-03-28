import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallLogW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallLogW100'

      short_name='CallLog'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M719-132q-103 0-207.5-48.5T318.5-318Q230-407 181-512.5T132-719v-29h160l33 152-106 96q29 50 59 90.5t62 72.5q33 35 75 65t97 60l101-106 135 27v159h-29ZM206-526l89-80-25-114H160q0 46 11.5 94.5T206-526Zm332 326q36 19 84.5 29.5T720-160v-109l-96-19-86 88ZM206-526Zm332 326Zm-58-600v-28h348v28H480Zm0 128v-28h348v28H480Zm0 128v-28h348v28H480Z"/>
    </Icon>
  );
});

IconMaterialCallLogW100.displayName = 'OnesyIconMaterialCallLogW100';

export default IconMaterialCallLogW100;
