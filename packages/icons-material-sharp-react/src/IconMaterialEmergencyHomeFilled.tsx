import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyHomeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHomeFilled'

      short_name='EmergencyHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440h80v-240h-80v240Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Zm0 272L48-480l432-432 432 432L480-48Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHomeFilled.displayName = 'OnesyIconMaterialEmergencyHomeFilled';

export default IconMaterialEmergencyHomeFilled;
