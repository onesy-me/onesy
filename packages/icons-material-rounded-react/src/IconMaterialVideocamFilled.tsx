import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideocamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamFilled'

      short_name='Videocam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Z"/>
    </Icon>
  );
});

IconMaterialVideocamFilled.displayName = 'OnesyIconMaterialVideocamFilled';

export default IconMaterialVideocamFilled;
