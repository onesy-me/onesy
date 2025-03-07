import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialControlCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlCameraW100Filled'

      short_name='ControlCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-408q-30 0-50.5-20.5T408-479q0-30 20.5-50.5T479-550q30 0 50.5 20.5T550-479q0 30-20.5 50.5T479-408Zm0 276L337-275l20-20 122 122 122-122 20 21-142 142ZM274-336 132-478l143-143 20 20-122 122 122 122-21 21Zm83-329-21-20 142-142 143 142-20 20-122-122-122 122Zm328 328-20-20 122-122-122-122 20-20 142 142-142 142Z"/>
    </Icon>
  );
});

IconMaterialControlCameraW100Filled.displayName = 'OnesyIconMaterialControlCameraW100Filled';

export default IconMaterialControlCameraW100Filled;
