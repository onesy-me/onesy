import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorsOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsOffW100Filled'

      short_name='SensorsOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-136 349-571q-14 20-21.5 42.5T320-480q0 29 10 55t27 47q4 5 4.5 10.5T357-357q-5 5-11 4t-10-6q-21-25-32.5-55.5T292-480q0-32 10-60t27-51l-94-94q-35 42-55 94t-20 111q0 63 22 117.5t60 96.5q5 5 6 11t-4 11q-5 5-10.5 4t-10.5-6q-42-47-66.5-106.5T132-480q0-65 22-122t61-103l-79-79q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5Zm-17-174q-5-3-6.5-8.5T762-329q19-34 28.5-72t9.5-79q0-62-22-116.5T718-694q-5-5-6-11t4-11q5-5 10.5-4t10.5 6q42 47 66.5 106.5T828-480q0 45-11.5 87T785-314q-3 5-8 6t-10-2ZM643-420q-6-2-8.5-7t-.5-11q3-10 4.5-20.5T640-480q0-29-10-55t-27-47q-4-5-4.5-10.5T603-603q5-5 11-4t10 6q21 25 32.5 55.5T668-480q0 14-2 26t-5 24q-2 6-7 9t-11 1Z"/>
    </Icon>
  );
});

IconMaterialSensorsOffW100Filled.displayName = 'OnesyIconMaterialSensorsOffW100Filled';

export default IconMaterialSensorsOffW100Filled;
