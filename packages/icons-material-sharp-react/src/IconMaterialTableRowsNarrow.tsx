import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableRowsNarrow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsNarrow'

      short_name='TableRowsNarrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-360h560v-80H200v80Zm0-160h560v-80H200v80Zm0-160h560v-80H200v80Zm-80 560v-720h720v720H120Zm80-80h560v-80H200v80Z"/>
    </Icon>
  );
});

IconMaterialTableRowsNarrow.displayName = 'OnesyIconMaterialTableRowsNarrow';

export default IconMaterialTableRowsNarrow;
