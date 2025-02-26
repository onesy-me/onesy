import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpacityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpacityW100Filled'

      short_name='Opacity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-112 0-190-76t-78-188q0-53 21.5-100.5T290-622l190-186 190 186q35 38 56.5 85.5T748-436q0 112-78 188t-190 76ZM243-400h474q12-72-14-124t-53-78L480-770 310-602q-27 26-52.5 78T243-400Z"/>
    </Icon>
  );
});

IconMaterialOpacityW100Filled.displayName = 'OnesyIconMaterialOpacityW100Filled';

export default IconMaterialOpacityW100Filled;
