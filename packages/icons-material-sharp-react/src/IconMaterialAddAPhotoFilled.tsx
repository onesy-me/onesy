import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddAPhotoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAPhotoFilled'

      short_name='AddAPhoto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-680v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM40-120v-640h206l74-80h280v160h80v80h160v480H40Z"/>
    </Icon>
  );
});

IconMaterialAddAPhotoFilled.displayName = 'OnesyIconMaterialAddAPhotoFilled';

export default IconMaterialAddAPhotoFilled;
