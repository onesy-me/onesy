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
      <path d="M480-131Q345-252 276-357t-69-190q0-120 78.5-200.5T480-828h20v28q-5 0-9.75-.5T480-801q-106 0-175.5 72T235-547q0 75 67.5 179.5T480-169q108-92 175-194t70-177h28q-3 84-71.5 187T480-131Zm.18-363q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5Zm-.18-60Zm240-86h28v-120h120v-28H748v-120h-28v120H600v28h120v120Z"/>
    </Icon>
  );
});

IconMaterialAddLocationAltW100.displayName = 'OnesyIconMaterialAddLocationAltW100';

export default IconMaterialAddLocationAltW100;
