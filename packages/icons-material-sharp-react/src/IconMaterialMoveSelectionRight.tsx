import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveSelectionRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionRight'

      short_name='MoveSelectionRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-240v-480h480v480H400Zm80-80h320v-320H480v320Zm-240 80v-80h80v80h-80Zm0-400v-80h80v80h-80ZM80-240v-80h80v80H80Zm0-200v-80h80v80H80Zm0-200v-80h80v80H80Zm560 160Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionRight.displayName = 'OnesyIconMaterialMoveSelectionRight';

export default IconMaterialMoveSelectionRight;
