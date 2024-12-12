import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorSmokeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorSmokeW100'

      short_name='DetectorSmoke'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m503-127-27-8 9-27q8-29 4.5-58.5T470-276q-22-33-27.5-68.5T449-418l8-27 27 8-9 27q-9 30-5.5 59t20.5 55q21 33 27 69t-6 73l-8 27Zm-150 0-27-8 9-27q8-29 4.5-59T319-277q-23-31-27.5-67.5T299-418l8-27 27 8-9 27q-9 30-5.5 59.5T341-295q21 32 26 69t-6 72l-8 27Zm296 0-27-8 9-27q8-28 4.5-59T615-277q-23-32-27-68t7-73l8-27 27 8-9 27q-9 30-5.5 59t20.5 55q21 34 26.5 69.5T657-154l-8 27ZM200-760v80h560v-80H200Zm94 108 30 80h312l30-80H294Zm9 108-39-108h-92v-136h616v136h-92l-42 108H303ZM200-760v80-80Z"/>
    </Icon>
  );
});

IconMaterialDetectorSmokeW100.displayName = 'OnesyIconMaterialDetectorSmokeW100';

export default IconMaterialDetectorSmokeW100;
