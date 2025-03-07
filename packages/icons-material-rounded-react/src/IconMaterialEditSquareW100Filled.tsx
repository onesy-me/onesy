import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditSquareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareW100Filled'

      short_name='EditSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M442-412q-13 0-21.5-8.5T412-442v-30q0-12 5-23.5t13-19.5l337-337q5-5 10-6.5t11-1.5q5 0 10 1.5t9 5.5l41 39q5 5 7.5 11t2.5 12q0 6-1.5 11t-6.5 10L510-430q-8 8-19.5 13t-23.5 5h-25Zm335-324 53-54-41-44-55 55 43 43ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h257q10 0 17 5.5t10 13.5q3 8 2 16.5t-8 15.5L330-557q-8 8-13 19.5t-5 23.5v142q0 25 17.5 42.5T372-312h137q12 0 23.5-5t19.5-13l185-185q7-7 15.5-8t16.5 2q8 3 13.5 10t5.5 17v262q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialEditSquareW100Filled.displayName = 'OnesyIconMaterialEditSquareW100Filled';

export default IconMaterialEditSquareW100Filled;
