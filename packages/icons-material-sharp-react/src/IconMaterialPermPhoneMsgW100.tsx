import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermPhoneMsgW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermPhoneMsgW100'

      short_name='PermPhoneMsg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M516-540v-248h272v184H580l-64 64Zm28-92h216v-128H544v128Zm0 0v-128 128Zm215 460q-103 0-207.5-48.5T358.5-358Q270-447 221-552.5T172-759v-29h160l33 152-106 96q29 50 59 90.5t62 72.5q33 35 75 65t97 60l101-106 135 27v159h-29ZM246-566l89-80-25-114H200q0 46 11.5 94.5T246-566Zm332 326q36 19 84.5 29.5T760-200v-109l-96-19-86 88ZM246-566Zm332 326Z"/>
    </Icon>
  );
});

IconMaterialPermPhoneMsgW100.displayName = 'OnesyIconMaterialPermPhoneMsgW100';

export default IconMaterialPermPhoneMsgW100;
