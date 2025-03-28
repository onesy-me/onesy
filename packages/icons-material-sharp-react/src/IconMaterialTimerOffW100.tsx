import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimerOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerOffW100'

      short_name='TimerOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m760-313-21-21q11-26 16-52.5t5-53.5q0-116-82-198t-198-82q-24 0-53 5t-53 16l-21-21q29-14 62-21t65-7q56 0 109 20.5t98 59.5l40-40 20 20-40 40q39 45 60 98.5T788-440q0 32-7 65t-21 62ZM494-579v-41h-28v13l28 28Zm306 459L698-222q-41 42-98.5 66T480-132q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-62 23-118t67-100L120-800l20-20 680 680-20 20Zm-320-40q54 0 105.5-21.5T678-242L282-638q-39 39-60.5 90T200-440q0 116 82 198t198 82ZM380-866v-28h200v28H380Zm100 426Zm77-77Z"/>
    </Icon>
  );
});

IconMaterialTimerOffW100.displayName = 'OnesyIconMaterialTimerOffW100';

export default IconMaterialTimerOffW100;
