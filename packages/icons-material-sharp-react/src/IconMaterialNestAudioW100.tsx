import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestAudioW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestAudioW100'

      short_name='NestAudio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M378-194q-47.85 0-81.92-34.07Q262-262.15 262-310v-306q0-63 43.88-106.5Q349.75-766 412-766h136q63 0 106.5 43.5T698-616v306q0 47.85-34.08 81.93Q629.85-194 582-194H378Zm0-28h204q36.3 0 62.15-25.85T670-310v-306q0-50.83-35.58-86.42Q598.83-738 548-738H412q-50.83 0-86.42 35.58Q290-666.83 290-616v306q0 36.3 25.85 62.15T378-222Zm0-230q11 0 19.5-8.5T406-480q0-11-8.5-19.5T378-508q-11 0-19.5 8.5T350-480q0 11 8.5 19.5T378-452Zm102 0q11 0 19.5-8.5T508-480q0-11-8.5-19.5T480-508q-11 0-19.5 8.5T452-480q0 11 8.5 19.5T480-452Zm102 0q11 0 19.5-8.5T610-480q0-11-8.5-19.5T582-508q-11 0-19.5 8.5T554-480q0 11 8.5 19.5T582-452Zm-102-28Z"/>
    </Icon>
  );
});

IconMaterialNestAudioW100.displayName = 'OnesyIconMaterialNestAudioW100';

export default IconMaterialNestAudioW100;
