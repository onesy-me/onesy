import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShiftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftW100Filled'

      short_name='Shift'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-202v-250h-82.51Q271-452 262-468.5t2-31.5l192-265q9.36-13 24.18-13T504-765l192 265q11 15 2 31.5T670.51-452H588v250q0 12.75-8.62 21.37Q570.75-172 558-172H402q-12.75 0-21.37-8.63Q372-189.25 372-202Z"/>
    </Icon>
  );
});

IconMaterialShiftW100Filled.displayName = 'OnesyIconMaterialShiftW100Filled';

export default IconMaterialShiftW100Filled;
