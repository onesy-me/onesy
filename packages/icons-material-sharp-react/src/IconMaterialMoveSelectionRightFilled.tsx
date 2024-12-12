import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveSelectionRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionRightFilled'

      short_name='MoveSelectionRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-240v-480h480v480H400Zm-160 0v-80h80v80h-80Zm0-400v-80h80v80h-80ZM80-240v-80h80v80H80Zm0-200v-80h80v80H80Zm0-200v-80h80v80H80Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionRightFilled.displayName = 'OnesyIconMaterialMoveSelectionRightFilled';

export default IconMaterialMoveSelectionRightFilled;
