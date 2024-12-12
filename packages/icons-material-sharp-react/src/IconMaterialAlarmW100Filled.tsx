import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmW100Filled'

      short_name='Alarm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120q0 64-24 120t-66 98q-42 42-98 66t-120 24Zm130-158 20-20-136-136v-194h-28v206l144 144ZM240-810l20 20-130 130-20-20 130-130Zm480 0 130 130-20 20-130-130 20-20Z"/>
    </Icon>
  );
});

IconMaterialAlarmW100Filled.displayName = 'OnesyIconMaterialAlarmW100Filled';

export default IconMaterialAlarmW100Filled;
