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
      <path d="M200-360q-17 0-28.5-11.5T160-400q0-17 11.5-28.5T200-440h560q17 0 28.5 11.5T800-400q0 17-11.5 28.5T760-360H200Zm0-160q-17 0-28.5-11.5T160-560q0-17 11.5-28.5T200-600h560q17 0 28.5 11.5T800-560q0 17-11.5 28.5T760-520H200Z"/>
    </Icon>
  );
});

IconMaterialDragHandle.displayName = 'OnesyIconMaterialDragHandle';

export default IconMaterialDragHandle;
