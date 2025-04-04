import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialValveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ValveW100Filled'

      short_name='Valve'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-780H320q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h320q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H494v106q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-106ZM186-191v-190q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v1h172v-172h-1q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h190q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-1v172h172v-1q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v190q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-1H214v1q0 6-4.04 10-4.03 4-10 4-5.96 0-9.96-4.02-4-4.03-4-9.98Z"/>
    </Icon>
  );
});

IconMaterialValveW100Filled.displayName = 'OnesyIconMaterialValveW100Filled';

export default IconMaterialValveW100Filled;
