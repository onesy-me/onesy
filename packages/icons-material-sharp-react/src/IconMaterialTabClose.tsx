import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabClose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabClose'

      short_name='TabClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m476-420 84-84 84 84 56-56-84-84 84-84-56-56-84 84-84-84-56 56 84 84-84 84 56 56ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTabClose.displayName = 'OnesyIconMaterialTabClose';

export default IconMaterialTabClose;
