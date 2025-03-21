import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSecurity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Security'

      short_name='Security'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 3.19L5 6.3V12h7v8.93c3.72-1.15 6.47-4.82 7-8.94h-7v-8.8z" opacity=".3"/><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 19.93V12H5V6.3l7-3.11v8.8h7c-.53 4.12-3.28 7.79-7 8.94z"/>
    </Icon>
  );
});

IconMaterialSecurity.displayName = 'OnesyIconMaterialSecurity';

export default IconMaterialSecurity;
