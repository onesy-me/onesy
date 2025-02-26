import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShiftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftFilled'

      short_name='Shift'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-160v-280H204q-26 0-36.5-22.5T173-505l276-337q12-15 31-15t31 15l276 337q16 20 5.5 42.5T756-440H640v280q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160Z"/>
    </Icon>
  );
});

IconMaterialShiftFilled.displayName = 'OnesyIconMaterialShiftFilled';

export default IconMaterialShiftFilled;
