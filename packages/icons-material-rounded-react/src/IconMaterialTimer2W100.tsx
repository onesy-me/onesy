import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer2W100'

      short_name='Timer2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-714h234q25 0 42.5 17.5T654-654v128q0 25-17.5 42.5T594-466H406q-14 0-23 9t-9 23v128q0 14 9 23t23 9h234q6 0 10 4t4 10q0 6-4 10t-10 4H406q-26 0-43-17t-17-43v-128q0-25 17.5-42.5T406-494h188q14 0 23-9t9-23v-128q0-14-9-23t-23-9H360q-6 0-10-4t-4-10q0-6 4-10t10-4Z"/>
    </Icon>
  );
});

IconMaterialTimer2W100.displayName = 'OnesyIconMaterialTimer2W100';

export default IconMaterialTimer2W100;
