import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShiftLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftLockW100'

      short_name='ShiftLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-312v-140H230l250-346 250 346H588v140H372Zm28-28h160v-140h111L480-749 289-480h111v140Zm80-205ZM212-184v-28h536v28H212Z"/>
    </Icon>
  );
});

IconMaterialShiftLockW100.displayName = 'OnesyIconMaterialShiftLockW100';

export default IconMaterialShiftLockW100;
