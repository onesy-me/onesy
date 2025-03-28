import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial8kPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='8kPlus'

      short_name='8kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360h180v-240H240v240Zm60-40v-60h60v60h-60Zm0-100v-60h60v60h-60Zm140 140h60v-90l70 90h73l-93-120 93-120h-73l-70 90v-90h-60v240Zm220-40h40v-60h60v-40h-60v-60h-40v60h-60v40h60v60ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial8kPlus.displayName = 'OnesyIconMaterial8kPlus';

export default IconMaterial8kPlus;
