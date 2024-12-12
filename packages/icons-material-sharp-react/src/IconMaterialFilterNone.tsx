import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterNone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterNone'

      short_name='FilterNone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialFilterNone.displayName = 'OnesyIconMaterialFilterNone';

export default IconMaterialFilterNone;
