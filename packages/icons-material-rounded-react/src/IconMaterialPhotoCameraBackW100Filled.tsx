import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoCameraBackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraBackW100Filled'

      short_name='PhotoCameraBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l56-61q8-9 19.5-14t24.5-5h144q13 0 24.5 5t19.5 14l56 61h116q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm156-128h272q9 0 13-8t-1-16l-72-97q-5-6-12-6t-12 6l-88 109-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-2 16t13 8Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraBackW100Filled.displayName = 'OnesyIconMaterialPhotoCameraBackW100Filled';

export default IconMaterialPhotoCameraBackW100Filled;
