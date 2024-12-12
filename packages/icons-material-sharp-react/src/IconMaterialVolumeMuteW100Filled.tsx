import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeMuteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteW100Filled'

      short_name='VolumeMute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-412v-136h130l126-126v388L462-412H332Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteW100Filled.displayName = 'OnesyIconMaterialVolumeMuteW100Filled';

export default IconMaterialVolumeMuteW100Filled;
