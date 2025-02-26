import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGarageDoorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageDoorW100'

      short_name='GarageDoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M236-172v-401l-127 94-17-22 388-287 389 287-17 22-127-94v401h-28v-394H264v394h-28Zm104-40v-28h280v28H340Zm0-118v-28h280v28H340Zm0-118v-28h280v28H340Zm-75-146h431L480-753 265-594Z"/>
    </Icon>
  );
});

IconMaterialGarageDoorW100.displayName = 'OnesyIconMaterialGarageDoorW100';

export default IconMaterialGarageDoorW100;
