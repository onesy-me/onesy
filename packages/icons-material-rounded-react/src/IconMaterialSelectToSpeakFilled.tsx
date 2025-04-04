import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectToSpeakFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectToSpeakFilled'

      short_name='SelectToSpeak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-481q0-83-44-151.5T598-735q-15-7-22-21.5t-2-29.5q6-16 21-23t31 0q97 43 155.5 131T840-481q0 109-58.5 197T626-153q-16 7-31 0t-21-23q-5-15 2-29.5t22-21.5q74-34 118-102.5T760-481ZM280-360H160q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h120l132-132q19-19 43.5-8.5T480-703v446q0 27-24.5 37.5T412-228L280-360Zm380-120q0 41-17.5 77.5T594-341q-11 8-22.5 3.5T560-356v-250q0-14 11.5-18.5T594-621q31 25 48.5 62t17.5 79ZM80-680q-17 0-28.5-11.5T40-720v-120q0-33 23.5-56.5T120-920h120q17 0 28.5 11.5T280-880q0 17-11.5 28.5T240-840H120v120q0 17-11.5 28.5T80-680ZM720-40q-17 0-28.5-11.5T680-80q0-17 11.5-28.5T720-120h120v-120q0-17 11.5-28.5T880-280q17 0 28.5 11.5T920-240v120q0 33-23.5 56.5T840-40H720Z"/>
    </Icon>
  );
});

IconMaterialSelectToSpeakFilled.displayName = 'OnesyIconMaterialSelectToSpeakFilled';

export default IconMaterialSelectToSpeakFilled;
