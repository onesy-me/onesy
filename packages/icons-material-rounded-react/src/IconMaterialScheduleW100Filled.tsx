import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScheduleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleW100Filled'

      short_name='Schedule'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-486v-180q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v180q0 5.57 2 10.78 2 5.22 7 10.22l145 145q4 4 9.5 4.5T640-320q5-5 5-10t-5-10L494-486Zm-13.83 354q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialScheduleW100Filled.displayName = 'OnesyIconMaterialScheduleW100Filled';

export default IconMaterialScheduleW100Filled;
