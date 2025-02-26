import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBluetoothDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDisabled'

      short_name='BluetoothDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M792-56 624-224 480-80h-40v-304L256-200l-56-56 196-196L56-792l56-56 736 736-56 56ZM520-234l46-46-46-46v92Zm44-274-56-56 88-88-76-74v174l-80-80v-248h40l228 228-144 144Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDisabled.displayName = 'OnesyIconMaterialBluetoothDisabled';

export default IconMaterialBluetoothDisabled;
