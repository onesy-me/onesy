import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveSelectionLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionLeft'

      short_name='MoveSelectionLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-480h480v480H80Zm80-80h320v-320H160v320Zm480-320v-80h80v80h-80Zm0 400v-80h80v80h-80Zm160-400v-80h80v80h-80Zm0 200v-80h80v80h-80Zm0 200v-80h80v80h-80ZM320-480Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionLeft.displayName = 'OnesyIconMaterialMoveSelectionLeft';

export default IconMaterialMoveSelectionLeft;
