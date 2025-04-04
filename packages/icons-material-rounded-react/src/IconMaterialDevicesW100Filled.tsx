import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesW100Filled'

      short_name='Devices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M153-212q-8.75 0-14.87-6.18-6.13-6.17-6.13-15 0-8.82 6.13-14.82 6.12-6 14.87-6h59v-434q0-24.75 17.63-42.38Q247.25-748 272-748h502q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H272q-14 0-23 9t-9 23v434h192q8.75 0 14.88 6.18 6.12 6.17 6.12 15 0 8.82-6.12 14.82-6.13 6-14.88 6H153Zm450 0q-12.75 0-21.37-8.63Q573-229.25 573-242v-348q0-12.75 8.63-21.38Q590.25-620 603-620h196q12.75 0 21.38 8.62Q829-602.75 829-590v348q0 12.75-8.62 21.37Q811.75-212 799-212H603Z"/>
    </Icon>
  );
});

IconMaterialDevicesW100Filled.displayName = 'OnesyIconMaterialDevicesW100Filled';

export default IconMaterialDevicesW100Filled;
