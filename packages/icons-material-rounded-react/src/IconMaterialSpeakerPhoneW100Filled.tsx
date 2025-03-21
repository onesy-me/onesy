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
      <path d="M480-680q-37 0-70 13t-60 36q-5 5-11 5.5t-11-4.5q-5-5-4-10.5t6-10.5q32-28 70-42.5t80-14.5q42 0 80 14.5t70 42.5q5 5 6 10.5t-4 10.5q-5 5-11 4.5t-11-5.5q-27-23-60-36t-70-13Zm0-160q-66 0-128.5 23.5T238-748q-5 5-11 6t-11-4q-5-5-3.5-11.5T219-769q54-48 121.5-73.5T480-868q72 0 139.5 25.5T741-769q5 5 6.5 11.5T744-746q-5 5-11 4t-11-6q-51-45-113.5-68.5T480-840Zm-60 720q-26 0-43-17t-17-43v-280q0-26 17-43t43-17h120q26 0 43 17t17 43v280q0 26-17 43t-43 17H420Z"/>
    </Icon>
  );
});

IconMaterialSpeakerPhoneW100Filled.displayName = 'OnesyIconMaterialSpeakerPhoneW100Filled';

export default IconMaterialSpeakerPhoneW100Filled;
