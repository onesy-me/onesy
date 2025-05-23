import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnterpriseOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnterpriseOffW100Filled'

      short_name='EnterpriseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h100v40L134-786q-4-4-4.5-9.5T134-806q5-5 10-5t10 5l692 692q4 4 4.5 9.5T846-94q-5 5-10 5t-10-5l-78-78H192Zm636-436v329q0 8-5 12t-11 4q-3 0-6.5-1.5T800-268L386-682q-7-7-10.5-15.5T372-716q0-26 17-43t43-17h96q26 0 43 17t17 43v48h180q26 0 43 17t17 43Zm-428-60h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48Z"/>
    </Icon>
  );
});

IconMaterialEnterpriseOffW100Filled.displayName = 'OnesyIconMaterialEnterpriseOffW100Filled';

export default IconMaterialEnterpriseOffW100Filled;
