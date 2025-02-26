import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialE911AvatarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='E911AvatarW100Filled'

      short_name='E911Avatar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-520v-40h40v40h-40Zm6-120v-188h28v188h-28Zm93 468q-103 0-207.5-48.5T358-358q-88-89-137-194.5T172-759v-29h160l33 152-106 96q29 50 59 90.5t62 72.5q33 35 75 65t97 60l101-106 135 27v159h-29Z"/>
    </Icon>
  );
});

IconMaterialE911AvatarW100Filled.displayName = 'OnesyIconMaterialE911AvatarW100Filled';

export default IconMaterialE911AvatarW100Filled;
