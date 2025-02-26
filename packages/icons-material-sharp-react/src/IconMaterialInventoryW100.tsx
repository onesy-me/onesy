import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInventoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InventoryW100'

      short_name='Inventory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-200 486-334l20-20 114 114 228-228 20 20-248 248Zm168-360h-28v-200H628v80H332v-80H200v560h240v28H172v-616h251q4-20 19.5-34t37.5-14q22 0 37.5 14t19.5 34h251v228ZM480.18-748q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialInventoryW100.displayName = 'OnesyIconMaterialInventoryW100';

export default IconMaterialInventoryW100;
