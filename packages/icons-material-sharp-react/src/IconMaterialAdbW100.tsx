import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdbW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdbW100'

      short_name='Adb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-510v-32.14Q256-600 282-647t70-78l-60-60 28-29 68 68q20-10 43.8-15 23.8-5 48-5t48.2 5q24 5 44 15l68-68 28 29-60 60q44 31 70 78t26 104.86V-510H256Zm320-64q13.6 0 22.8-9.2 9.2-9.2 9.2-22.8 0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8 0 13.6 9.2 22.8 9.2 9.2 22.8 9.2Zm-192 0q13.6 0 22.8-9.2 9.2-9.2 9.2-22.8 0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8 0 13.6 9.2 22.8 9.2 9.2 22.8 9.2Zm96 448q-93.6 0-158.8-65.2Q256-256.4 256-350v-128h448v128.23Q704-256 638.8-191q-65.2 65-158.8 65Z"/>
    </Icon>
  );
});

IconMaterialAdbW100.displayName = 'OnesyIconMaterialAdbW100';

export default IconMaterialAdbW100;
