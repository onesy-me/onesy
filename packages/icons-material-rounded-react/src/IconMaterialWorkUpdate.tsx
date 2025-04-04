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
      <path d="M160-200v-15 15-440 440Zm0 80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v120q0 17-11.5 28T840-481q-17 0-28.5-11.5T800-521v-119H160v440h260q17 0 28.5 11.5T460-160q0 17-11.5 28.5T420-120H160Zm240-600h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-20-156-58-58q-6-6-14-6t-14 6q-6 6-6 14t6 14l78 78q12 12 28 12t28-12l78-78q6-6 6-14t-6-14q-6-6-14-6t-14 6l-58 58v-144q0-8-6-14t-14-6q-8 0-14 6t-6 14v144Z"/>
    </Icon>
  );
});

IconMaterialWorkUpdate.displayName = 'OnesyIconMaterialWorkUpdate';

export default IconMaterialWorkUpdate;
