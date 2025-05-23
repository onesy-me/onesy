import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVpnLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnLockW100Filled'

      short_name='VpnLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-73 0-136.5-27T233-233q-47-47-74-110.5T132-480q0-73 27-136.5T233-727q47-47 110.5-74T480-828q25 0 48.5 3.5T575-815q11 3 18 12t7 20v23q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q27 0 47.5 16t28.5 40q39-42 61.5-97.5T800-480v-13q0-6-1-12 0-6 4-10.5t10-4.5q6 0 9.5 3.5t4.5 9.5q1 7 1 13.5v13.5q0 73-27 136.5T727-233q-47 47-110.5 74T480-132Zm-40-30v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 122 80.5 212.5T440-162Zm270-438q-13 0-21.5-8.5T680-630v-116q0-13 8.5-21.5T710-776h10v-40q0-29 19.5-48.5T788-884q29 0 48.5 19.5T856-816v40h10q13 0 21.5 8.5T896-746v116q0 13-8.5 21.5T866-600H710Zm38-176h80v-40q0-17-11.5-28.5T788-856q-17 0-28.5 11.5T748-816v40Z"/>
    </Icon>
  );
});

IconMaterialVpnLockW100Filled.displayName = 'OnesyIconMaterialVpnLockW100Filled';

export default IconMaterialVpnLockW100Filled;
