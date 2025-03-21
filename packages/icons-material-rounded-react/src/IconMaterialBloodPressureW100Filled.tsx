import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBloodPressureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodPressureW100Filled'

      short_name='BloodPressure'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M751-331q4-4 4.5-9.5T751-351q-4-4-10-4t-10 4l-53 53q-4 4-4.5 9.5T678-278q4 4 10 4t10-4l53-53Zm-71 199q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM132-494v-194q0-26 17-43t43-17h576q26 0 43 17t17 43v167q0 14-12 20.5t-24-.5q-26-14-54.5-20.5T680-528q-41 0-77.5 12T535-481l-83-165q-2-3-5-4.5t-7-1.5q-4 0-7.5 1.5T427-646L280-351l-68-135q-2-4-5-6t-7-2h-68Zm60 282q-26 0-43-17t-17-43v-194h59l76 153q2 4 5 5.5t8 1.5q4 0 7-1.5t5-5.5l147-295 73 146q-37 34-58.5 81T432-280q0 8 .5 17t1.5 17q2 14-6 24t-21 10H192Z"/>
    </Icon>
  );
});

IconMaterialBloodPressureW100Filled.displayName = 'OnesyIconMaterialBloodPressureW100Filled';

export default IconMaterialBloodPressureW100Filled;
