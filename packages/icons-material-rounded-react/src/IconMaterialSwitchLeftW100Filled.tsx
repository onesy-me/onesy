import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchLeftW100Filled'

      short_name='SwitchLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M370-321q-5 0-10.5-2t-10.5-7L220-459q-5-5-7-10t-2-11q0-6 2-11t7-10l129-129q5-5 10.5-7t10.5-2q11 0 20.5 8t9.5 22v258q0 14-9.5 22t-20.5 8Zm2-25v-268L238-480l134 134Zm218 25q-11 0-20.5-8t-9.5-22v-258q0-14 9.5-22t20.5-8q5 0 10.5 2t10.5 7l129 129q5 5 7 10t2 11q0 6-2 11t-7 10L611-330q-5 5-10.5 7t-10.5 2Z"/>
    </Icon>
  );
});

IconMaterialSwitchLeftW100Filled.displayName = 'OnesyIconMaterialSwitchLeftW100Filled';

export default IconMaterialSwitchLeftW100Filled;
