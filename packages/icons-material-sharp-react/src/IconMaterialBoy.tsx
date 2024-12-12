import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Boy'

      short_name='Boy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-660q-29 0-49.5-20.5T410-730q0-29 20.5-49.5T480-800q29 0 49.5 20.5T550-730q0 29-20.5 49.5T480-660Zm-80 500v-200h-40v-180q0-33 23.5-56.5T440-620h80q33 0 56.5 23.5T600-540v180h-40v200H400Z"/>
    </Icon>
  );
});

IconMaterialBoy.displayName = 'OnesyIconMaterialBoy';

export default IconMaterialBoy;
