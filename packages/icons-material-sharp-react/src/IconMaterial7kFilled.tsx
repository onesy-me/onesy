import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial7kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7kFilled'

      short_name='7k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-360h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-210 0h70l58-188v-52H260v60h106l-56 180ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterial7kFilled.displayName = 'OnesyIconMaterial7kFilled';

export default IconMaterial7kFilled;
