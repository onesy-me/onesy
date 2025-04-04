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
      <path d="M852-680q-11 0-19.5-8t-8.5-19q0-66-45.5-111.5T667-864q-11 0-19-8.5t-8-19.5q0-11 8-19t19-8q88 0 150 62t62 150q0 11-8 19t-19 8Zm-108 0q-11 0-19.5-7.5T716-706q0-21-14.5-35.5T666-756q-11 0-18.5-8.5T640-784q0-11 8-19t19-8q43 0 73.5 30.5T771-707q0 11-8 19t-19 8ZM480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l50-54q11-12 26.5-19t32.5-7h165q17 0 28.5 11.5T600-800v80q33 0 56.5 23.5T680-640h160q17 0 28.5 11.5T880-600v400q0 33-23.5 56.5T800-120H160Z"/>
    </Icon>
  );
});

IconMaterialLinkedCameraFilled.displayName = 'OnesyIconMaterialLinkedCameraFilled';

export default IconMaterialLinkedCameraFilled;
