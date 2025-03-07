import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkUpdate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkUpdate'

      short_name='WorkUpdate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200v-15 15-440 440Zm-80 80v-600h240v-160h320v160h240v251q-18-13-38-22.5T800-508v-132H160v440h283q3 21 9 41t15 39H80Zm320-600h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm0-80 120-120-28-28-72 72v-164h-40v164l-72-72-28 28 120 120Z"/>
    </Icon>
  );
});

IconMaterialWorkUpdate.displayName = 'OnesyIconMaterialWorkUpdate';

export default IconMaterialWorkUpdate;
