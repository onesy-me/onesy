import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBurstModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BurstModeW100'

      short_name='BurstMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-252v-456h28v456H80Zm172 0v-456h28v456h-28Zm172 0v-456h456v456H424Zm28-28h400v-400H452v400Zm64-92h272l-80-108-76 100-56-74-60 82Zm-64 92v-400 400Z"/>
    </Icon>
  );
});

IconMaterialBurstModeW100.displayName = 'OnesyIconMaterialBurstModeW100';

export default IconMaterialBurstModeW100;
