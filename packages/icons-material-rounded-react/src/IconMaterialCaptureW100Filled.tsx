import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCaptureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CaptureW100Filled'

      short_name='Capture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm88-118h400q13 0 21.5-8.5T710-360v-240q0-13-8.5-21.5T680-630H280q-13 0-21.5 8.5T250-600v240q0 13 8.5 21.5T280-330Z"/>
    </Icon>
  );
});

IconMaterialCaptureW100Filled.displayName = 'OnesyIconMaterialCaptureW100Filled';

export default IconMaterialCaptureW100Filled;
