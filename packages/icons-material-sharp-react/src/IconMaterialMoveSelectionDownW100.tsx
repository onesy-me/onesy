import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveSelectionDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionDownW100'

      short_name='MoveSelectionDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M290-132v-380h380v380H290Zm28-28h324v-324H318v324Zm-28-470v-40h40v40h-40Zm340 0v-40h40v40h-40ZM290-788v-40h40v40h-40Zm170 0v-40h40v40h-40Zm170 0v-40h40v40h-40ZM480-322Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionDownW100.displayName = 'OnesyIconMaterialMoveSelectionDownW100';

export default IconMaterialMoveSelectionDownW100;
