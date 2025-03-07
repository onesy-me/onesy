import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOffW100Filled'

      short_name='AlarmOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M747-314 340-721q27-11 58-19t69-8q64 0 120 24t98 66q42 42 66 98t24 120q0 32-6.5 64T747-314Zm70-346L687-790l20-20 130 130-20 20Zm-4 566L685-222q-40 40-96 65t-122 25q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-62 24-119t66-99l-67-67-65 65-20-20 65-65-65-65 20-20 716 716-20 20Z"/>
    </Icon>
  );
});

IconMaterialAlarmOffW100Filled.displayName = 'OnesyIconMaterialAlarmOffW100Filled';

export default IconMaterialAlarmOffW100Filled;
