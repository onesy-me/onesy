import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCall'

      short_name='VideoCall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h640v260l160-160v440L720-420v260H80Zm80-80h480v-480H160v480Zm0 0v-480 480Zm200-80h80v-120h120v-80H440v-120h-80v120H240v80h120v120Z"/>
    </Icon>
  );
});

IconMaterialVideoCall.displayName = 'OnesyIconMaterialVideoCall';

export default IconMaterialVideoCall;
