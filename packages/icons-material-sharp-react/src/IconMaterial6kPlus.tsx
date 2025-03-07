import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial6kPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6kPlus'

      short_name='6kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360h160v-140H300v-40h100v-60H240v240Zm60-40v-60h40v60h-40Zm140 40h60v-90l70 90h73l-93-120 93-120h-73l-70 90v-90h-60v240Zm220-40h40v-60h60v-40h-60v-60h-40v60h-60v40h60v60ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial6kPlus.displayName = 'OnesyIconMaterial6kPlus';

export default IconMaterial6kPlus;
