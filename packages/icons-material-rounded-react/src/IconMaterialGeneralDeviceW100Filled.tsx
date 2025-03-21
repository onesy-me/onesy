import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGeneralDeviceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneralDeviceW100Filled'

      short_name='GeneralDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M389.76-292q-12.76 0-21.26-8.63-8.5-8.62-8.5-21.37v-406q0-24.75 17.65-42.38Q395.29-788 420.07-788h120.15q24.78 0 42.28 17.62Q600-752.75 600-728v406q0 12.75-8.63 21.37-8.64 8.63-21.4 8.63H389.76ZM374-232h212q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H374q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Z"/>
    </Icon>
  );
});

IconMaterialGeneralDeviceW100Filled.displayName = 'OnesyIconMaterialGeneralDeviceW100Filled';

export default IconMaterialGeneralDeviceW100Filled;
