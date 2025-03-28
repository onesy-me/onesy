import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBloodtypeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodtypeW100Filled'

      short_name='Bloodtype'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.82-132Q365-132 288.5-211.1T212-408q0-82 66.5-182.5T480-812q135 121 201.5 221.5T748-408q0 117.8-76.68 196.9-76.69 79.1-191.5 79.1ZM386-266h188v-28H386v28Zm80-120h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Z"/>
    </Icon>
  );
});

IconMaterialBloodtypeW100Filled.displayName = 'OnesyIconMaterialBloodtypeW100Filled';

export default IconMaterialBloodtypeW100Filled;
