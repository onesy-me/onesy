import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenRotationAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationAlt'

      short_name='ScreenRotationAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M544-48 150-440h114l280 280 200-200H640v-80h240v240h-80v-104L544-48ZM80-520v-240h80v104l256-256 394 392H696L416-800 216-600h104v80H80Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationAlt.displayName = 'OnesyIconMaterialScreenRotationAlt';

export default IconMaterialScreenRotationAlt;
