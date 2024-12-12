import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOnHubDeviceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnHubDeviceW100Filled'

      short_name='OnHubDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-184q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h196q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H382Zm-16-136-32-406q-2-26 15-44t42.74-18h176.52Q594-788 611-770q17 18 15 44l-32 406q-1 12-9.39 20-8.4 8-20.61 8H396q-12.21 0-20.61-8-8.39-8-9.39-20Z"/>
    </Icon>
  );
});

IconMaterialOnHubDeviceW100Filled.displayName = 'OnesyIconMaterialOnHubDeviceW100Filled';

export default IconMaterialOnHubDeviceW100Filled;
