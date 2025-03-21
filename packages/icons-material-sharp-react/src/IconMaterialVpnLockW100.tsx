import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVpnLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnLockW100'

      short_name='VpnLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-73 0-136.5-27T233-233q-47-47-74-110.5T132-480q0-73 27-136.5T233-727q47-47 110.5-74T480-828q32 0 61.5 5.5T600-808v128H440v120H320v80h280v160h40l76 56q39-42 61.5-97.5T800-480v-20q0-9-2-20h28q2 11 2 20v20q0 73-27 136.5T727-233q-47 47-110.5 74T480-132Zm-40-30v-78l-80-80v-40L168-552q-3 18-5.5 36t-2.5 36q0 122 80.5 212.5T440-162Zm240-438v-176h40v-40q0-29 19.5-48.5T788-884q29 0 48.5 19.5T856-816v40h40v176H680Zm68-176h80v-40q0-17-11.5-28.5T788-856q-17 0-28.5 11.5T748-816v40Z"/>
    </Icon>
  );
});

IconMaterialVpnLockW100.displayName = 'OnesyIconMaterialVpnLockW100';

export default IconMaterialVpnLockW100;
