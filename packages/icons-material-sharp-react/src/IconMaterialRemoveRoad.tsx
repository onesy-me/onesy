import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveRoad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveRoad'

      short_name='RemoveRoad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-440v-360h80v360h-80ZM160-160v-640h80v640h-80Zm280-480v-160h80v160h-80Zm0 240v-160h80v160h-80Zm0 240v-160h80v160h-80Zm177 23 85-85-85-84 57-57 85 85 85-85 56 57-85 85 84 85-55 56-86-85-85 85-56-57Z"/>
    </Icon>
  );
});

IconMaterialRemoveRoad.displayName = 'OnesyIconMaterialRemoveRoad';

export default IconMaterialRemoveRoad;
