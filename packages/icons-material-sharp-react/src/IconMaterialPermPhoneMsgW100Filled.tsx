import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermPhoneMsgW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermPhoneMsgW100Filled'

      short_name='PermPhoneMsg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M516-540v-248h272v184H580l-64 64Zm243 368q-103 0-207.5-48.5T358-358q-88-89-137-194.5T172-759v-29h160l33 152-106 96q29 50 59 90.5t62 72.5q33 35 75 65t97 60l101-106 135 27v159h-29Z"/>
    </Icon>
  );
});

IconMaterialPermPhoneMsgW100Filled.displayName = 'OnesyIconMaterialPermPhoneMsgW100Filled';

export default IconMaterialPermPhoneMsgW100Filled;
