import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHangoutVideoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutVideoW100'

      short_name='HangoutVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-352h196q13 0 21.5-8.5T544-382v-72l91 73q11 9 24 2.5t13-20.5v-162q0-14-13-20.5t-24 2.5l-91 73v-72q0-13-8.5-21.5T514-608H318q-13 0-21.5 8.5T288-578v196q0 13 8.5 21.5T318-352ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q14 0 23-9t9-23v-416q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32-480v480-480Z"/>
    </Icon>
  );
});

IconMaterialHangoutVideoW100.displayName = 'OnesyIconMaterialHangoutVideoW100';

export default IconMaterialHangoutVideoW100;
