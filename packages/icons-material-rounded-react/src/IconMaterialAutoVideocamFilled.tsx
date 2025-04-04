import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoVideocamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoVideocamFilled'

      short_name='AutoVideocam'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h480q33 0 56.5 23.5T720 336v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720 636v180q0 33-23.5 56.5T640 896H160Zm190-270 32 70q5 12 18 12t18-12l32-70 70-32q12-5 12-18t-12-18l-70-32-32-70q-5-12-18-12t-18 12l-32 70-70 32q-12 5-12 18t12 18l70 32Z"/>
    </Icon>
  );
});

IconMaterialAutoVideocamFilled.displayName = 'OnesyIconMaterialAutoVideocamFilled';

export default IconMaterialAutoVideocamFilled;
