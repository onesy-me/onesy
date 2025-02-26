import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightbulbW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbW100Filled'

      short_name='Lightbulb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-124q-26 0-45.5-17T410-184h140q-5 26-24.5 43T480-124ZM346-264v-28h268v28H346Zm0-108q-53-36-83.5-89.5T232-580q0-104 72-176t176-72q104 0 176 72t72 176q0 65-30.5 118.5T614-372H346Z"/>
    </Icon>
  );
});

IconMaterialLightbulbW100Filled.displayName = 'OnesyIconMaterialLightbulbW100Filled';

export default IconMaterialLightbulbW100Filled;
