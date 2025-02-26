import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveSelectionDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionDown'

      short_name='MoveSelectionDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80v-480h480v480H240Zm80-80h320v-320H320v320Zm-80-480v-80h80v80h-80Zm400 0v-80h80v80h-80ZM240-800v-80h80v80h-80Zm200 0v-80h80v80h-80Zm200 0v-80h80v80h-80ZM480-320Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionDown.displayName = 'OnesyIconMaterialMoveSelectionDown';

export default IconMaterialMoveSelectionDown;
