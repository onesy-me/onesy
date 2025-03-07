import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOffW100'

      short_name='AlarmOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m747-314-20-20q10-27 15-54t5-52q0-117-81.5-198.5T467-720q-28 0-54 5t-51 16l-22-22q27-11 58-19t69-8q64 0 120 24t98 66q42 42 66 98t24 120q0 32-6.5 64T747-314Zm70-346L687-790l20-20 130 130-20 20Zm-4 566L685-222q-40 40-96 65t-122 25q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-62 24-119t66-99l-67-67-65 65-20-20 65-65-65-65 20-20 716 716-20 20Zm-346-66q57 0 107.5-21t90.5-61L269-638q-40 40-61 91t-21 107q0 117 81.5 198.5T467-160Zm0-280Zm78-77Z"/>
    </Icon>
  );
});

IconMaterialAlarmOffW100.displayName = 'OnesyIconMaterialAlarmOffW100';

export default IconMaterialAlarmOffW100;
