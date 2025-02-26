import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial7k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7k'

      short_name='7k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-360h60v-90l70 90h73l-93-120 93-120h-73l-70 90v-90h-60v240Zm-210 0h70l58-188v-52H260v60h106l-56 180ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial7k.displayName = 'OnesyIconMaterial7k';

export default IconMaterial7k;
