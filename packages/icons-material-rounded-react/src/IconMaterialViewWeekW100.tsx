import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewWeekW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekW100'

      short_name='ViewWeek'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-240h163v-480H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm191 0h194v-480H383v480Zm222 0h163q14 0 23-9t9-23v-416q0-14-9-23t-23-9H605v480Zm-413 28q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialViewWeekW100.displayName = 'OnesyIconMaterialViewWeekW100';

export default IconMaterialViewWeekW100;
