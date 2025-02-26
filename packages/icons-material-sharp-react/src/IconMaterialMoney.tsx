import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoney = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Money'

      short_name='Money'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-320h200v-320H560v320Zm80-80v-160h40v160h-40Zm-320 80h200v-320H320v320Zm80-80v-160h40v160h-40Zm-200 80h80v-320h-80v320ZM80-160v-640h800v640H80Zm80-560v480-480Zm0 480h640v-480H160v480Z"/>
    </Icon>
  );
});

IconMaterialMoney.displayName = 'OnesyIconMaterialMoney';

export default IconMaterialMoney;
