import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForwardToInbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInbox'

      short_name='ForwardToInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-440 160-640v400h360v80H80v-640h800v360h-80v-200L480-440Zm0-80 320-200H160l320 200ZM760-40l-56-56 63-64H600v-80h167l-64-64 57-56 160 160L760-40ZM160-640v440-240 3-283 80Z"/>
    </Icon>
  );
});

IconMaterialForwardToInbox.displayName = 'OnesyIconMaterialForwardToInbox';

export default IconMaterialForwardToInbox;
