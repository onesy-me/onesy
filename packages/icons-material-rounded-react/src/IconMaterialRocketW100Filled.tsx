import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRocketW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RocketW100Filled'

      short_name='Rocket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-170q-15 6-28-3t-13-25v-151q0-15 7-28.5t20-21.5l49-32q7 66 17 115t33 112l-85 34Zm132-52q-11 0-18-7.5T383-247q-20-59-30.5-109T342-468q0-93 27-169.5T459-782q4-5 9.5-7t11.5-2q6 0 11.5 2t9.5 7q63 68 90 144.5T618-468q0 63-10 112t-31 109q-4 10-11 17.5t-18 7.5H412Zm68-244q23 0 38.5-15.5T534-520q0-23-15.5-38.5T480-574q-23 0-38.5 15.5T426-520q0 23 15.5 38.5T480-466Zm199 297-85-34q23-63 33-112.5T644-431l49 33q13 8 20 21.5t7 28.5v151q0 16-13 25t-28 3Z"/>
    </Icon>
  );
});

IconMaterialRocketW100Filled.displayName = 'OnesyIconMaterialRocketW100Filled';

export default IconMaterialRocketW100Filled;
