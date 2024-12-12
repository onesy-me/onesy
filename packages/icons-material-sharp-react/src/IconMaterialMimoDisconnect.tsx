import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMimoDisconnect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MimoDisconnect'

      short_name='MimoDisconnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-80l40-40H80v-593h47l73 73h-40v440h368L28-820l56-56L876-84l-56 56-212-212h72l40 40v80H240Zm588-126-28-28v-486H314l-80-80h646v594h-52ZM557-517Zm-213 13Z"/>
    </Icon>
  );
});

IconMaterialMimoDisconnect.displayName = 'OnesyIconMaterialMimoDisconnect';

export default IconMaterialMimoDisconnect;
