import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveSelectionLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionLeftW100'

      short_name='MoveSelectionLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-290v-380h380v380H132Zm28-28h324v-324H160v324Zm470-312v-40h40v40h-40Zm0 340v-40h40v40h-40Zm158-340v-40h40v40h-40Zm0 170v-40h40v40h-40Zm0 170v-40h40v40h-40ZM322-480Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionLeftW100.displayName = 'OnesyIconMaterialMoveSelectionLeftW100';

export default IconMaterialMoveSelectionLeftW100;
