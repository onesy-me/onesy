import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightbulbW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbW100'

      short_name='Lightbulb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-124q-26 0-45.5-17T410-184h140q-5 26-24.5 43T480-124ZM346-264v-28h268v28H346Zm0-108q-53-36-83.5-89.5T232-580q0-104 72-176t176-72q104 0 176 72t72 176q0 65-30.5 118.5T614-372H346Zm8-28h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z"/>
    </Icon>
  );
});

IconMaterialLightbulbW100.displayName = 'OnesyIconMaterialLightbulbW100';

export default IconMaterialLightbulbW100;
