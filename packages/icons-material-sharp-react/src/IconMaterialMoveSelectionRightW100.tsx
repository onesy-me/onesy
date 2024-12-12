import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveSelectionRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionRightW100'

      short_name='MoveSelectionRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M448-290v-380h380v380H448Zm28-28h324v-324H476v324Zm-186 28v-40h40v40h-40Zm0-340v-40h40v40h-40ZM132-290v-40h40v40h-40Zm0-170v-40h40v40h-40Zm0-170v-40h40v40h-40Zm506 150Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionRightW100.displayName = 'OnesyIconMaterialMoveSelectionRightW100';

export default IconMaterialMoveSelectionRightW100;
