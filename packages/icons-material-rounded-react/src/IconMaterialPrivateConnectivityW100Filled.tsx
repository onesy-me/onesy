import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrivateConnectivityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivateConnectivityW100Filled'

      short_name='PrivateConnectivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-252q-91 0-157-62t-71-152H114q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h138q5-90 71-152t157-62q91 0 157 62t71 152h138q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H708q-5 90-71 152t-157 62Zm-80-100h160q14.45 0 24.22-9.77Q594-371.55 594-386v-120q0-14.45-9.78-24.22Q574.45-540 560-540h-6v-30q0-32.5-21-55.25T480.03-648q-31.03 0-52.53 21.74Q406-604.53 406-574v34h-6q-14.45 0-24.23 9.78Q366-520.45 366-506v120q0 14.45 9.77 24.23Q385.55-352 400-352Zm80-66q-11 0-19.5-8.5T452-446q0-11 8.5-19.5T480-474q11 0 19.5 8.5T508-446q0 11-8.5 19.5T480-418Zm-46-122v-34q0-19 13.5-32.5T480-620q19 0 32.5 13.5T526-574v34h-92Z"/>
    </Icon>
  );
});

IconMaterialPrivateConnectivityW100Filled.displayName = 'OnesyIconMaterialPrivateConnectivityW100Filled';

export default IconMaterialPrivateConnectivityW100Filled;
