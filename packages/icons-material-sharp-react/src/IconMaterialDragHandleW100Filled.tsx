import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDragHandleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragHandleW100Filled'

      short_name='DragHandle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-386v-28h536v28H212Zm0-160v-28h536v28H212Z"/>
    </Icon>
  );
});

IconMaterialDragHandleW100Filled.displayName = 'OnesyIconMaterialDragHandleW100Filled';

export default IconMaterialDragHandleW100Filled;
