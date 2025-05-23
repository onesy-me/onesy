import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffW100'

      short_name='PowerOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M450-172q-12.75 0-21.37-8.63Q420-189.25 420-202v-72L310-384q-8-8-13-19.28-5-11.28-5-23.72v-141q0-15.27 5.5-28.64Q303-610 317-617l23 23q-8 0-14 7t-6 19v154l128 128v86h64v-86l48-48L88-806q-4-4-4.5-9.5T88-826q5-5 10-5t10 5l716 716q4 4 4.5 9.5T824-90q-5 5-10 5t-10-5L580-314l-40 40v72q0 12.75-8.62 21.37Q522.75-172 510-172h-60Zm206-218-16-16v-162q0-12-10-22t-22-10H446l-56-56v-118q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v146h124v-146q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v160l-14-14h52q24.75 0 42.38 17.62Q668-592.75 668-568v149q0 8.29-3.13 15.79-3.13 7.51-8.87 13.21ZM545-501Zm-105 47Z"/>
    </Icon>
  );
});

IconMaterialPowerOffW100.displayName = 'OnesyIconMaterialPowerOffW100';

export default IconMaterialPowerOffW100;
