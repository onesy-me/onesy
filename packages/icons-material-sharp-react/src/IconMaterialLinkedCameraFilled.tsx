import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLinkedCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedCameraFilled'

      short_name='LinkedCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M826-680q0-78-54-132t-132-54v-54q100 0 170 70t70 170h-54Zm-106 0q0-33-23.5-56.5T640-760v-54q55 0 93.5 39t40.5 95h-54ZM480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM80-120v-640h206l74-80h240v120q33 0 56.5 23.5T680-640h200v520H80Z"/>
    </Icon>
  );
});

IconMaterialLinkedCameraFilled.displayName = 'OnesyIconMaterialLinkedCameraFilled';

export default IconMaterialLinkedCameraFilled;
