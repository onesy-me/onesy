import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromecastDeviceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromecastDeviceW100Filled'

      short_name='ChromecastDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-406v-148h98v148h-98Zm-548 84q-57 0-102.5-31.5T92-430v-100q0-46 45.5-77T240-638q25.3 0 48.15 6Q311-626 345-612q15 6 27.5 10.5t23.9 7.71q11.4 3.22 22.14 4.5Q429.27-588 440-588h288v216H440q-10.73 0-21.46 1.29-10.74 1.28-22.14 4.5-11.4 3.21-23.9 7.71Q360-354 345-348q-34 14-56.85 20T240-322ZM120-466h24q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8 0-5.6-4.2-9.8-4.2-4.2-9.8-4.2h-24q-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8 0 5.6 4.2 9.8 4.2 4.2 9.8 4.2Z"/>
    </Icon>
  );
});

IconMaterialChromecastDeviceW100Filled.displayName = 'OnesyIconMaterialChromecastDeviceW100Filled';

export default IconMaterialChromecastDeviceW100Filled;
