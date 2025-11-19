import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileCheckFilled'

      short_name='MobileCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m442-360 198-198-56-56-142 142-56-56-56 56 112 112ZM200-40v-880h560v204h40v192h-40v484H200Z"/>
    </Icon>
  );
});

IconMaterialMobileCheckFilled.displayName = 'OnesyIconMaterialMobileCheckFilled';

export default IconMaterialMobileCheckFilled;
