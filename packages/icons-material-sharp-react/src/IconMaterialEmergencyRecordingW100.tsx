import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyRecordingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyRecordingW100'

      short_name='EmergencyRecording'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M411-306h28v-150l137 79 13-24-136-79 136-79-13-24-137 79v-150h-28v150l-136-79-14 24 136 79-136 79 14 24 136-79v150Zm-254 94v-536h536v248l110-110v260L693-460v248H157Zm28-28h480v-480H185v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialEmergencyRecordingW100.displayName = 'OnesyIconMaterialEmergencyRecordingW100';

export default IconMaterialEmergencyRecordingW100;
