import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveSelectionDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionDownFilled'

      short_name='MoveSelectionDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80v-480h480v480H240Zm0-560v-80h80v80h-80Zm400 0v-80h80v80h-80ZM240-800v-80h80v80h-80Zm200 0v-80h80v80h-80Zm200 0v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionDownFilled.displayName = 'OnesyIconMaterialMoveSelectionDownFilled';

export default IconMaterialMoveSelectionDownFilled;
