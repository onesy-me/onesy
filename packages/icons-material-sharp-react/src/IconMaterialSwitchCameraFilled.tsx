import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCameraFilled'

      short_name='SwitchCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-640h206l74-80h240l74 80h206v640H80Zm280-160 56-56-62-62h252l-62 62 56 56 160-160-160-160-56 56 64 66H352l64-66-56-56-160 160 160 160Z"/>
    </Icon>
  );
});

IconMaterialSwitchCameraFilled.displayName = 'OnesyIconMaterialSwitchCameraFilled';

export default IconMaterialSwitchCameraFilled;
