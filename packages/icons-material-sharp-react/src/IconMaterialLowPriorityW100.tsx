import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLowPriorityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowPriorityW100'

      short_name='LowPriority'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-487q0 81 55 137t135 56h59l-72-73 20-20 106 107-106 108-20-20 72-74h-59q-91 0-154.5-64.5T132-487q0-92 63.5-156.5T350-708h114v28H350q-79 0-134.5 56T160-487Zm404 221v-28h264v28H564Zm0-207v-28h264v28H564Zm0-207v-28h264v28H564Z"/>
    </Icon>
  );
});

IconMaterialLowPriorityW100.displayName = 'OnesyIconMaterialLowPriorityW100';

export default IconMaterialLowPriorityW100;
