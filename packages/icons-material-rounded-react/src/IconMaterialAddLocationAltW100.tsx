import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddLocationAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationAltW100'

      short_name='AddLocationAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-828h20v28q-5 0-9.75-.5T480-801q-106 0-175.5 72T235-547q0 75 67.5 179.5T480-169q108-92 175-194t70-177h28q-2 55-29 111.5T659.5-321q-37.5 51-78 93T512-159q-6.64 6-15.09 9-8.46 3-16.91 3-8 0-16-2.5t-15-8.5q-36-33-78-78.5T292.5-333q-36.5-51-61-106T207-547q0-120 78.5-200.5T480-828Zm.18 334q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5Zm-.18-60Zm240-206v106q0 5.95 4.04 9.97 4.03 4.03 10 4.03 5.96 0 9.96-4.03 4-4.02 4-9.97v-106h106q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H748v-106q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v106H614q-5.95 0-9.97 4.04-4.03 4.03-4.03 10 0 5.96 4.03 9.96 4.02 4 9.97 4h106Z"/>
    </Icon>
  );
});

IconMaterialAddLocationAltW100.displayName = 'OnesyIconMaterialAddLocationAltW100';

export default IconMaterialAddLocationAltW100;
