import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdaptiveAudioMic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdaptiveAudioMic'

      short_name='AdaptiveAudioMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M711-480Zm49 80q-17 0-28.5-11.5T720-440q0-17 11.5-28.5T760-480h77q-4-7-9-12t-12-9q-26-15-59.5-22t-76.5-7h-21q-17 0-28-11t-11-28q0-17 9.5-27.5T656-609q5-1 12-1h12q53 0 99 11t86 32q26 14 40.5 41.5T920-463v23q0 17-11.5 28.5T880-400H760Zm-80-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0-40ZM249-480ZM80-400q-17 0-28.5-11.5T40-440v-23q0-35 14.5-62.5T95-567q40-21 86-32t99-11h12q7 0 12 1 17 2 26.5 12.5T340-569q0 17-11 28t-28 11h-21q-43 0-76.5 7T144-501q-7 4-12 9t-9 12h77q17 0 28.5 11.5T240-440q0 17-11.5 28.5T200-400H80Zm200-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T320-760q0-17-11.5-28.5T280-800q-17 0-28.5 11.5T240-760q0 17 11.5 28.5T280-720Zm0-40Zm200 480q-33 0-56.5-23.5T400-360v-120q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480v120q0 33-23.5 56.5T480-280Zm0 200q-13 0-21.5-8.5T450-110v-52q-65-10-111.5-56T283-325q-2-14 7-24.5t23-10.5q11 0 19 6.5t10 17.5q11 52 49 84t89 32q51 0 89-32t49-84q2-11 10-17.5t19-6.5q14 0 23 10.5t7 24.5q-9 61-55.5 107T510-162v52q0 13-8.5 21.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialAdaptiveAudioMic.displayName = 'OnesyIconMaterialAdaptiveAudioMic';

export default IconMaterialAdaptiveAudioMic;
