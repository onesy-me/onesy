import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIceSkatingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkatingW100'

      short_name='IceSkating'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-106v-28h160v-132H146v-548h308v154q0 35.37 21 64.18Q496-567 532-557l202 56v235H614v132h106q60 0 99-30t47-90h28q-8 72-55 110t-119 38H106Zm68-188h532v-185l-183-52q-30-9-52.5-27.5T437-606H326v-28h103q-2-11-2.5-23.5T426-686H326v-28h100v-72H174v492Zm120 160h292v-132H294v132ZM174-294Z"/>
    </Icon>
  );
});

IconMaterialIceSkatingW100.displayName = 'OnesyIconMaterialIceSkatingW100';

export default IconMaterialIceSkatingW100;
