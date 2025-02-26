import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCopyAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyAll'

      short_name='CopyAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-220v-80h80v80h-80Zm0-140v-80h80v80h-80Zm0-140v-80h80v80h-80ZM260-80v-80h80v80h-80Zm20-160v-640h520v640H280Zm80-80h360v-480H360v480Zm40 240v-80h80v80h-80Zm-280 0v-80h80v80h-80Zm420 0v-80h80v80h-80ZM120-640v-80h80v80h-80Zm420 80Z"/>
    </Icon>
  );
});

IconMaterialCopyAll.displayName = 'OnesyIconMaterialCopyAll';

export default IconMaterialCopyAll;
