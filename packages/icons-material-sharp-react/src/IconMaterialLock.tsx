import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lock'

      short_name='Lock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-560h120v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h120v560H160Zm80-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/>
    </Icon>
  );
});

IconMaterialLock.displayName = 'OnesyIconMaterialLock';

export default IconMaterialLock;
