import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadphonesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesW100'

      short_name='Headphones'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-172h-20q-26 0-43-17t-17-43v-248q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120v248q0 26-17 43t-43 17h-20q-25 0-42.5-17.5T648-232v-104q0-25 17.5-42.5T708-396h52v-84q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v84h52q25 0 42.5 17.5T312-336v104q0 25-17.5 42.5T252-172Zm0-196h-52v136q0 12 10 22t22 10h20q14 0 23-9t9-23v-104q0-14-9-23t-23-9Zm424 32v104q0 14 9 23t23 9h20q12 0 22-10t10-22v-136h-52q-14 0-23 9t-9 23Zm-424-32h32-84 52Zm424 0h84-84Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesW100.displayName = 'OnesyIconMaterialHeadphonesW100';

export default IconMaterialHeadphonesW100;
