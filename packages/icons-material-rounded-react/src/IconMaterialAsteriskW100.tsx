import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAsteriskW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AsteriskW100'

      short_name='Asterisk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.96-172q-5.96 0-9.96-4.02-4-4.03-4-9.98v-260L282-262q-4 4-9.5 4.5T262-262q-5-5-5-10t5-10l184-184H186q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h260L262-678q-4-4-4.5-10t4-10q4.5-4 10.5-3.5t10 4.5l184 184v-261q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v261l185-185q4-4 9.5-3.5t9.5 4.29q4 3.79 4 9t-4 9.21L513-494h261q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H513l185 185q4 4 4 9.5t-4 10q-4 4.5-10 4t-10-4.5L494-446v260q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialAsteriskW100.displayName = 'OnesyIconMaterialAsteriskW100';

export default IconMaterialAsteriskW100;
