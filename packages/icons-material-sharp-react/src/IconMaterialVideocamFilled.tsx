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
      <path d="M80-160v-640h640v260l160-160v440L720-420v260H80Z"/>
    </Icon>
  );
});

IconMaterialVideocamFilled.displayName = 'OnesyIconMaterialVideocamFilled';

export default IconMaterialVideocamFilled;
