import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDentistryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DentistryW100'

      short_name='Dentistry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M670-823q45 1 76.5 32t31.5 76q0 9-1 25.5t-4 39.5l-56 403q-2 19-16.5 30T667-206q-14 0-24-8.5T625-234L503-397q-5-6-10.5-10t-13.5-4q-8 0-24 16L336-237q-9 11-20 21t-25 10q-19 0-33-11.5T242-248l-55-402q-3-23-4-39.5t-1-25.5q0-45 31.5-76.5T290-823q27 0 47.5 9.5T378-793q20 11 44 20.5t58 9.5q35 0 59.5-9.5T584-793q20-11 40-20.5t46-9.5Zm0 28q-23 0-40.5 9.5T592-765q-20 11-46 20.5t-66 9.5q-38 0-64-9.5T370-765q-20-11-38.5-20.5T290-795q-33 0-56.5 23.5T210-715q0 8 1 23t4 35l55 405q1 8 7 12.5t14 4.5q8 0 13.5-6.5T315-255l117-156q9-12 21-20t27-8q14 0 26.5 8t21.5 20l118 159q5 6 9.5 12t12.5 6q8 0 14.5-4.5T690-251l55-406q3-20 4-35t1-23q0-33-23.5-56.5T670-795ZM480-515Z"/>
    </Icon>
  );
});

IconMaterialDentistryW100.displayName = 'OnesyIconMaterialDentistryW100';

export default IconMaterialDentistryW100;
