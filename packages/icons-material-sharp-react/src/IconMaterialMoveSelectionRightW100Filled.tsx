import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveSelectionRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionRightW100Filled'

      short_name='MoveSelectionRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M448-290v-380h380v380H448Zm-158 0v-40h40v40h-40Zm0-340v-40h40v40h-40ZM132-290v-40h40v40h-40Zm0-170v-40h40v40h-40Zm0-170v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionRightW100Filled.displayName = 'OnesyIconMaterialMoveSelectionRightW100Filled';

export default IconMaterialMoveSelectionRightW100Filled;
