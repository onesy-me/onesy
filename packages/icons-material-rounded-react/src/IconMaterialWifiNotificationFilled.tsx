import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiNotificationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiNotificationFilled'

      short_name='WifiNotification'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q2 1 4 1t4 1q22 6 22 30.5T544-724q-28 12-54 27t-50 33q-37 27-38.5 75t33.5 83l203 203q11 11 25.5 17t30.5 6h66q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H200Zm493-420q-46 0-87 15t-74 41q-10 8-22.5 8t-21.5-9q-9-9-8-22t11-21q42-34 93.5-53T694-680q58 0 109 19t93 53q10 8 10.5 21t-8.5 22q-9 9-21 9t-22-8q-33-26-74.5-41T693-620Zm1 120q-21 0-40.5 6T617-477q-11 7-22.5 6.5T574-480q-9-9-8.5-21t10.5-20q25-18 54.5-28.5T693-560q33 0 63.5 10.5T812-521q10 8 10.5 20t-8.5 21q-9 9-21 9t-23-7q-17-11-36-16.5t-40-5.5Zm0 140q-17 0-28.5-11.5T654-400q0-17 11.5-28.5T694-440q17 0 28.5 11.5T734-400q0 17-11.5 28.5T694-360Z"/>
    </Icon>
  );
});

IconMaterialWifiNotificationFilled.displayName = 'OnesyIconMaterialWifiNotificationFilled';

export default IconMaterialWifiNotificationFilled;
