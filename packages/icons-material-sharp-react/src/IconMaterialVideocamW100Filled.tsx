import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideocamW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamW100Filled'

      short_name='Videocam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M157-212v-536h536v248l110-110v260L693-460v248H157Z"/>
    </Icon>
  );
});

IconMaterialVideocamW100Filled.displayName = 'OnesyIconMaterialVideocamW100Filled';

export default IconMaterialVideocamW100Filled;
