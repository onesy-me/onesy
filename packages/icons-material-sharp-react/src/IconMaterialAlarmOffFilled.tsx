import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOffFilled'

      short_name='AlarmOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M798-270 314-760q38-20 79.5-30t86.5-10q74 0 139.5 28T734-694.5Q783-645 811.5-579T840-436q0 45-11 86.5T798-270Zm52-370L680-810l56-56 170 170-56 56ZM820-24 694-150q-45 33-99.5 51.5T480-80q-74 0-139.5-28T226-184q-49-48-77.5-113T120-436q0-62 18.5-116.5T192-652l-34-34-48 48-56-56 48-48-74-74 56-56L876-80l-56 56Z"/>
    </Icon>
  );
});

IconMaterialAlarmOffFilled.displayName = 'OnesyIconMaterialAlarmOffFilled';

export default IconMaterialAlarmOffFilled;
