import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyShareW100Filled'

      short_name='EmergencyShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-69q-93-85-140.5-156.5T292-354q0-80 54.5-137T480-548q79 0 133.5 57T668-354q0 63-50 131.5T480-69Zm0-251q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320ZM339-678l-19-19q34-27 75-42t85-15q44 0 85 15t75 42l-19 19q-30-24-66.5-36T480-726q-38 0-74.5 12T339-678ZM226-791l-19-20q57-50 127.5-76.5T480-914q76 0 146.5 26.5T754-810l-20 20q-53-47-118-71.5T480-886q-70 0-135.5 24T226-791Z"/>
    </Icon>
  );
});

IconMaterialEmergencyShareW100Filled.displayName = 'OnesyIconMaterialEmergencyShareW100Filled';

export default IconMaterialEmergencyShareW100Filled;
