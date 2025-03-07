import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpecificGravityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpecificGravityW100Filled'

      short_name='SpecificGravity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M309-132q-23.25 0-40.5-14.93T249-185l-67-610q-2-13.5 7.25-23.25T212-828h536q13.5 0 22.75 9.75T778-795l-67 610q-2.25 23.14-19.5 38.07T651-132H309Zm-79-482h155q18-19 42.46-29.5T480-654q28.08 0 52.54 10.5T575-614h155l20-186H209l21 186Zm250.19 200Q524-414 555-445.19q31-31.2 31-75Q586-564 554.81-595q-31.2-31-75-31Q436-626 405-594.81q-31 31.2-31 75Q374-476 405.19-445q31.2 31 75 31Z"/>
    </Icon>
  );
});

IconMaterialSpecificGravityW100Filled.displayName = 'OnesyIconMaterialSpecificGravityW100Filled';

export default IconMaterialSpecificGravityW100Filled;
