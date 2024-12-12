import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestAudioW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestAudioW100Filled'

      short_name='NestAudio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M378-194q-48 0-82-34t-34-82v-306q0-63 44-106.5T412-766h136q63 0 106.5 43.5T698-616v306q0 48-34 82t-82 34H378Zm0-258q11 0 19.5-8.5T406-480q0-11-8.5-19.5T378-508q-11 0-19.5 8.5T350-480q0 11 8.5 19.5T378-452Zm102 0q11 0 19.5-8.5T508-480q0-11-8.5-19.5T480-508q-11 0-19.5 8.5T452-480q0 11 8.5 19.5T480-452Zm102 0q11 0 19.5-8.5T610-480q0-11-8.5-19.5T582-508q-11 0-19.5 8.5T554-480q0 11 8.5 19.5T582-452Z"/>
    </Icon>
  );
});

IconMaterialNestAudioW100Filled.displayName = 'OnesyIconMaterialNestAudioW100Filled';

export default IconMaterialNestAudioW100Filled;
