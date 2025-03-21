import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoTransferW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransferW100Filled'

      short_name='NoTransfer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 640-280h40v108h-28v-80H308v80h-28v-88q-20-5-44-33.5T212-360v-348L90-830l20-20L872-88l-20 20ZM743-329 564-508h156v-196H368l-96-96q33.11-14 84.47-21 51.37-7 123.53-7 144.05 0 206.03 24.97Q748-778.05 748-720v360q0 7.85-1.5 15.43Q745-337 743-329Zm-402.76-11q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM240-508h172L240-680v172Z"/>
    </Icon>
  );
});

IconMaterialNoTransferW100Filled.displayName = 'OnesyIconMaterialNoTransferW100Filled';

export default IconMaterialNoTransferW100Filled;
