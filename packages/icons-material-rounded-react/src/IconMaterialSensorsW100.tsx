import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsW100'

      short_name='Sensors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-480q0 63 22 117.5t60 96.5q5 5 6 11t-4 11q-5 5-10.5 4t-10.5-6q-42-47-66.5-106.5T132-480q0-68 24.5-127.5T223-714q5-5 10.5-6t10.5 4q5 5 4 11t-6 11q-38 43-60 97.5T160-480Zm160 0q0 29 10 55t27 47q4 5 4.5 10.5T357-357q-5 5-11 4t-10-6q-21-25-32.5-55.5T292-480q0-35 11.5-65.5T336-601q4-5 10-6t11 4q5 5 4.5 10.5T357-582q-17 21-27 47t-10 55Zm160 28q-11 0-19.5-8.5T452-480q0-11 8.5-19.5T480-508q11 0 19.5 8.5T508-480q0 11-8.5 19.5T480-452Zm160-28q0-29-10-55t-27-47q-4-5-4.5-10.5T603-603q5-5 11-4t10 6q21 25 32.5 55.5T668-480q0 35-11.5 65.5T624-359q-4 5-10 6t-11-4q-5-5-4.5-10.5T603-378q17-21 27-47t10-55Zm160 0q0-62-22-116.5T718-694q-5-5-6-11t4-11q5-5 10.5-4t10.5 6q42 47 66.5 106.5T828-480q0 68-24.5 127.5T737-246q-5 5-10.5 6t-10.5-4q-5-5-4-11t6-11q38-43 60-97.5T800-480Z"/>
    </Icon>
  );
});

IconMaterialSensorsW100.displayName = 'OnesyIconMaterialSensorsW100';

export default IconMaterialSensorsW100;
