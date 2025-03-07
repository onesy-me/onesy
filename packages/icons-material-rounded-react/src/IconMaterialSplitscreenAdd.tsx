import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenAdd'

      short_name='SplitscreenAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-160 4-4 160Zm0 80q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360H200v160h360q17 0 28.5 11.5T600-160q0 17-11.5 28.5T560-120H200Zm0-400q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H200Zm0-80h560v-160H200v160Zm0 0v-160 160Zm560 480h-40q-17 0-28.5-11.5T680-160q0-17 11.5-28.5T720-200h40v-40q0-17 11.5-28.5T800-280q17 0 28.5 11.5T840-240v40h40q17 0 28.5 11.5T920-160q0 17-11.5 28.5T880-120h-40v40q0 17-11.5 28.5T800-40q-17 0-28.5-11.5T760-80v-40Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenAdd.displayName = 'OnesyIconMaterialSplitscreenAdd';

export default IconMaterialSplitscreenAdd;
