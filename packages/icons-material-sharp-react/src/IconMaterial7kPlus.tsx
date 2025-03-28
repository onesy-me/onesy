import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial7kPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7kPlus'

      short_name='7kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-360h70l58-188v-52H230v60h106l-56 180Zm160 0h60v-90l70 90h73l-93-120 93-120h-73l-70 90v-90h-60v240Zm220-40h40v-60h60v-40h-60v-60h-40v60h-60v40h60v60ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial7kPlus.displayName = 'OnesyIconMaterial7kPlus';

export default IconMaterial7kPlus;
