import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrameReload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameReload'

      short_name='FrameReload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-73 0-127.5-45.5T284-440h62q13 44 49.5 72t84.5 28q58 0 99-41t41-99q0-58-41-99t-99-41q-29 0-54 10.5T382-580h58v60H280v-160h60v57q27-26 63-41.5t77-15.5q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM120-120v-240h80v160h160v80H120Zm480 0v-80h160v-160h80v240H600ZM120-600v-240h240v80H200v160h-80Zm640 0v-160H600v-80h240v240h-80Z"/>
    </Icon>
  );
});

IconMaterialFrameReload.displayName = 'OnesyIconMaterialFrameReload';

export default IconMaterialFrameReload;
