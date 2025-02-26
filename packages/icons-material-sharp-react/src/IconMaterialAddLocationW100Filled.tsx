import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationW100Filled'

      short_name='AddLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-426h28v-120h120v-28H494v-120h-28v120H346v28h120v120Zm14 295Q345-252 276-357t-69-190q0-120 78.5-200.5T480-828q116 0 194.5 80.5T753-547q0 85-69 190T480-131Z"/>
    </Icon>
  );
});

IconMaterialAddLocationW100Filled.displayName = 'OnesyIconMaterialAddLocationW100Filled';

export default IconMaterialAddLocationW100Filled;
