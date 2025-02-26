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
      <path d="m255-132-77-696h604l-77 696H255Zm-25-482h155q18-19 42.46-29.5T480-654q28.08 0 52.54 10.5T575-614h155l20-186H209l21 186Zm250.19 200Q524-414 555-445.19q31-31.2 31-75Q586-564 554.81-595q-31.2-31-75-31Q436-626 405-594.81q-31 31.2-31 75Q374-476 405.19-445q31.2 31 75 31Z"/>
    </Icon>
  );
});

IconMaterialSpecificGravityW100Filled.displayName = 'OnesyIconMaterialSpecificGravityW100Filled';

export default IconMaterialSpecificGravityW100Filled;
