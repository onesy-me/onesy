import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotionPhotosOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionPhotosOffW100Filled'

      short_name='MotionPhotosOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m794-126-89-89q-46 39-103 61t-122 22q-72.21 0-135.72-27.4-63.51-27.41-110.49-74.39-46.98-46.98-74.39-110.49Q132-407.79 132-480q0-65 22-122t61-103l-89-89 20-20 668 668-20 20Zm-18-170L296-776q40.73-25.21 86.87-38.61Q429-828 480-828q72.21 0 135.72 27.41 63.51 27.4 110.49 74.38t74.38 110.49Q828-552.21 828-480q0 51-13.39 97.13Q801.21-336.73 776-296Z"/>
    </Icon>
  );
});

IconMaterialMotionPhotosOffW100Filled.displayName = 'OnesyIconMaterialMotionPhotosOffW100Filled';

export default IconMaterialMotionPhotosOffW100Filled;
