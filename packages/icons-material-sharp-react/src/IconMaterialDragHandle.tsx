import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDragHandle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragHandle'

      short_name='DragHandle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z"/>
    </Icon>
  );
});

IconMaterialDragHandle.displayName = 'OnesyIconMaterialDragHandle';

export default IconMaterialDragHandle;
