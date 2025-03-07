import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabRecentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRecentFilled'

      short_name='TabRecent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m786-146 28-28-74-74v-112h-40v128l86 86ZM520-560h280v-160H520v160ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM80-160v-640h800v331q-35-25-76.5-38T719-520q-116 0-197.5 82T440-240q0 21 3 41t9 39H80Z"/>
    </Icon>
  );
});

IconMaterialTabRecentFilled.displayName = 'OnesyIconMaterialTabRecentFilled';

export default IconMaterialTabRecentFilled;
