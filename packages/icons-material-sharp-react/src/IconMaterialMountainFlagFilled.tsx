import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMountainFlagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MountainFlagFilled'

      short_name='MountainFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m281-487 55-113h104v-280h280l-40 80 40 80H520v120h100l57 114-120 80-77-39-77 39-122-81ZM80-80l165-335 152 101 83-41 83 41 150-99L880-80H80Z"/>
    </Icon>
  );
});

IconMaterialMountainFlagFilled.displayName = 'OnesyIconMaterialMountainFlagFilled';

export default IconMaterialMountainFlagFilled;
