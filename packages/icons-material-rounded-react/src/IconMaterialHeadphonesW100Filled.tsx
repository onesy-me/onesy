import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadphonesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesW100Filled'

      short_name='Headphones'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-172h-20q-26 0-43-17t-17-43v-248q0-64.08 24-120.04Q220-656 262-698q42-42 97.94-66 55.95-24 120-24Q544-788 600-764t98 66q42 42 66 97.96 24 55.96 24 120.04v248q0 26-17 43t-43 17h-20q-24.75 0-42.37-17.63Q648-207.25 648-232v-104q0-24.75 17.63-42.38Q683.25-396 708-396h52v-84q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v84h52q24.75 0 42.38 17.62Q312-360.75 312-336v104q0 24.75-17.62 42.37Q276.75-172 252-172Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesW100Filled.displayName = 'OnesyIconMaterialHeadphonesW100Filled';

export default IconMaterialHeadphonesW100Filled;
