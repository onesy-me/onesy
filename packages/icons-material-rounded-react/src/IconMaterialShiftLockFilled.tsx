import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShiftLockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftLockFilled'

      short_name='ShiftLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280v-160H204q-26 0-36.5-22.5T173-505l276-337q12-15 31-15t31 15l276 337q16 20 5.5 42.5T756-440H640v160q0 17-11.5 28.5T600-240H360q-17 0-28.5-11.5T320-280ZM200-80q-17 0-28.5-11.5T160-120q0-17 11.5-28.5T200-160h560q17 0 28.5 11.5T800-120q0 17-11.5 28.5T760-80H200Z"/>
    </Icon>
  );
});

IconMaterialShiftLockFilled.displayName = 'OnesyIconMaterialShiftLockFilled';

export default IconMaterialShiftLockFilled;
