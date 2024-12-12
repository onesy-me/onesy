import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeakerPhoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerPhoneW100Filled'

      short_name='SpeakerPhone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m338-620-20-20q33-33 75-50.5t87-17.5q45 0 87 17.5t75 50.5l-20 20q-29-29-65-44.5T480-680q-41 0-77 15.5T338-620ZM226-736l-20-20q54-54 125.5-83T480-868q77 0 148.5 29T754-756l-20 20q-51-50-117-77t-137-27q-71 0-137 27t-117 77Zm134 616v-400h240v400H360Z"/>
    </Icon>
  );
});

IconMaterialSpeakerPhoneW100Filled.displayName = 'OnesyIconMaterialSpeakerPhoneW100Filled';

export default IconMaterialSpeakerPhoneW100Filled;
