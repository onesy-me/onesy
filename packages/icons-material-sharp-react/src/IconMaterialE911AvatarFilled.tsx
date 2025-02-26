import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialE911AvatarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='E911AvatarFilled'

      short_name='E911Avatar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-520v-80h80v80h-80Zm0-160v-200h80v200h-80Zm158 560q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42Z"/>
    </Icon>
  );
});

IconMaterialE911AvatarFilled.displayName = 'OnesyIconMaterialE911AvatarFilled';

export default IconMaterialE911AvatarFilled;
