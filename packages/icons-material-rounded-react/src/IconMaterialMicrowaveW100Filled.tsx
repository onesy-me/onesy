import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicrowaveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicrowaveW100Filled'

      short_name='Microwave'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M436-546q-17 0-32-7.5T375-570q-9-6-18.5-11t-20.5-5q-11 0-20 4t-17 10q-2 2-4.5 3.5T289-567q-6 0-10.5-4.5T274-582q0-4 2-7.5t6-5.5q12-8 25.5-13.5T336-614q16 0 30 7.5t28 15.5q10 7 20.5 12t21.5 5q10 0 37-14 2-2 4.5-3.5t5.5-1.5q6 0 10.5 4.5T498-578q0 4-2 7.5t-6 5.5q-12 8-25.5 13.5T436-546Zm0 200q-17 0-32-7.5T375-370q-9-6-18.5-11t-20.5-5q-11 0-20 4t-17 10q-2 2-4.5 3.5T289-367q-6 0-10.5-4.5T274-382q0-4 2-7.5t6-5.5q12-8 25.5-13.5T336-414q16 0 30 7.5t28 15.5q10 7 20.5 12t21.5 5q14 0 23.5-9.5T483-393q6 0 10.5 4.5T498-378q0 3-1 5.5t-3 4.5q-1 1-2 1.5t-2 1.5q-12 8-25.5 13.5T436-346ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h420v-480H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm528-212q11 0 19.5-8.5T748-480q0-11-8.5-19.5T720-508q-11 0-19.5 8.5T692-480q0 11 8.5 19.5T720-452Zm0 160q11 0 19.5-8.5T748-320q0-11-8.5-19.5T720-348q-11 0-19.5 8.5T692-320q0 11 8.5 19.5T720-292Zm-9-324h18q6 0 10.5-4.5T744-631v-18q0-6-4.5-10.5T729-664h-18q-6 0-10.5 4.5T696-649v18q0 6 4.5 10.5T711-616Z"/>
    </Icon>
  );
});

IconMaterialMicrowaveW100Filled.displayName = 'OnesyIconMaterialMicrowaveW100Filled';

export default IconMaterialMicrowaveW100Filled;
