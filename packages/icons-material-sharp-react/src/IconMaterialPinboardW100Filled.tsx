import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinboardW100Filled'

      short_name='Pinboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m276-132-14-14v-174H132v-28l56-117v-127h-56v-28h288v28h-56v127l56 117v28H290v174l-14 14Zm227-80v-28h297v-480H132v-28h696v536H503Z"/>
    </Icon>
  );
});

IconMaterialPinboardW100Filled.displayName = 'OnesyIconMaterialPinboardW100Filled';

export default IconMaterialPinboardW100Filled;
