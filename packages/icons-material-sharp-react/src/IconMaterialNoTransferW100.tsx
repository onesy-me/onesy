import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoTransferW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransferW100'

      short_name='NoTransfer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M308-252v80h-28v-88q-20-5-44-33.5T212-360v-348L90-830l20-20L872-88l-20 20-212-212h40v108h-28v-80H308Zm12-28h320L440-480H240v120q0 33 23.5 56.5T320-280Zm423-49-23-23v-128H592l-28-28h156v-196H368l-28-28h380q-9-35-64-51.5T480-800q-67 0-112.5 5T293-779l-21-21q33.11-14 84.47-21 51.37-7 123.53-7 144.05 0 206.03 24.97Q748-778.05 748-720v360q0 7.85-1.5 15.43Q745-337 743-329Zm-402.76-11q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM240-508h172L240-680v172Zm100-224h380-380Zm100 252Zm152 0Z"/>
    </Icon>
  );
});

IconMaterialNoTransferW100.displayName = 'OnesyIconMaterialNoTransferW100';

export default IconMaterialNoTransferW100;
