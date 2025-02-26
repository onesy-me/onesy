import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyFilled'

      short_name='Emergency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M410-190v-168l-146 84q-25 14-53 7t-42-33q-14-25-7-53t32-42l146-85-146-84q-25-14-32-42.5t7-53.5q14-25 42-32t53 7l146 84v-169q0-29 20.5-49.5T480-840q29 0 49.5 20.5T550-770v169l146-84q25-14 53-7t42 32q14 25 6.5 53.5T765-564l-145 84 146 85q25 14 32 42t-7 54q-14 25-42 32t-53-7l-146-84v168q0 29-20.5 49.5T480-120q-29 0-49.5-20.5T410-190Z"/>
    </Icon>
  );
});

IconMaterialEmergencyFilled.displayName = 'OnesyIconMaterialEmergencyFilled';

export default IconMaterialEmergencyFilled;
