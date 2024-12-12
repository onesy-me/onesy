import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVillaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaW100Filled'

      short_name='Villa'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-172v-255.57h264q0-23.43 16.43-39.93t39.5-16.5q23.07 0 39.57 16.45T788-428v256H628v-112h-56v112H412Zm-240 0v-432l428-165v313H384v284H172Z"/>
    </Icon>
  );
});

IconMaterialVillaW100Filled.displayName = 'OnesyIconMaterialVillaW100Filled';

export default IconMaterialVillaW100Filled;
