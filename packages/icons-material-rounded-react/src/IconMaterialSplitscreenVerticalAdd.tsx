import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenVerticalAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenVerticalAdd'

      short_name='SplitscreenVerticalAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-760H599h5-4 160Zm-240 0q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v360q0 17-11.5 28.5T800-360q-17 0-28.5-11.5T760-400v-360H600v640q-33 0-56.5-23.5T520-200v-560ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H200Zm160-640H200v560h160v-560Zm0 0H200h160Zm400 640h-40q-17 0-28.5-11.5T680-160q0-17 11.5-28.5T720-200h40v-40q0-17 11.5-28.5T800-280q17 0 28.5 11.5T840-240v40h40q17 0 28.5 11.5T920-160q0 17-11.5 28.5T880-120h-40v40q0 17-11.5 28.5T800-40q-17 0-28.5-11.5T760-80v-40Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenVerticalAdd.displayName = 'OnesyIconMaterialSplitscreenVerticalAdd';

export default IconMaterialSplitscreenVerticalAdd;
