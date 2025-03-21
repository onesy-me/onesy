import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShareLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareLocationFilled'

      short_name='ShareLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M567-89q-18 4-31.5-7.5T522-128q0-14 9.5-25.5T555-169q25-6 48.5-15.5T649-208q13-8 28.5-6.5T703-203q14 14 12.5 32T698-143q-31 20-63.5 33T567-89Zm193-171q-10-10-11.5-25t6.5-27q13-22 23-45t16-49q4-14 16-24t26-10q20 0 31.5 14t6.5 32q-8 36-21.5 68.5T819-264q-10 15-27.5 16.5T760-260Zm75-260q-14 0-25.5-10T794-554q-6-26-16-49.5T755-648q-8-12-6.5-27t11.5-25q14-14 31.5-13t27.5 16q20 29 34 62.5t22 68.5q4 18-8 32t-32 14ZM398-90q-137-32-225.5-140T84-480q0-143 88-252t225-139q18-4 31.5 7.5T442-833q0 14-9.5 25.5T409-792q-107 26-176 113t-69 199q0 112 69 197.5T409-169q14 4 23.5 16t9.5 26q0 19-13 30t-31 7Zm254-661q-23-14-47-24.5T556-792q-14-4-24-15.5T522-833q0-19 13.5-30.5T567-871q35 8 68 21t64 33q16 10 17.5 28T704-757q-10 10-24.5 12t-27.5-6ZM483-294q-8 0-15.5-2.5T455-304q-66-61-99-114t-33-98q0-70 45.5-117T483-680q69 0 114.5 47T643-516q0 45-33 98t-99 114q-5 5-12.5 7.5T483-294Zm0-186q18 0 30.5-12.5T526-523q0-18-12.5-30.5T483-566q-18 0-30.5 12.5T440-523q0 18 12.5 30.5T483-480Z"/>
    </Icon>
  );
});

IconMaterialShareLocationFilled.displayName = 'OnesyIconMaterialShareLocationFilled';

export default IconMaterialShareLocationFilled;
