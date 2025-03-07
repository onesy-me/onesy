import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddLocationAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationAltW100Filled'

      short_name='AddLocationAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.18-494q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5ZM480-131Q345-252 276-357t-69-190q0-120 78.5-200.5T480-828q11 0 20.5.5T520-825v145h120v120h113v13q0 85-69 190T480-131Zm240-509v-120H600v-28h120v-120h28v120h120v28H748v120h-28Z"/>
    </Icon>
  );
});

IconMaterialAddLocationAltW100Filled.displayName = 'OnesyIconMaterialAddLocationAltW100Filled';

export default IconMaterialAddLocationAltW100Filled;
