import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorAlarm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorAlarm'

      short_name='DetectorAlarm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-200h80v200h-80Zm323-101L621-362l57-57 141 142-56 56Zm-566 0-56-56 141-142 57 57-142 141Zm3-539v40h560v-40H200Zm124 120 12 40h288l12-40H324Zm-46 120-38-120H120v-200h720v200H720l-46 120H278Zm-78-240v40-40Z"/>
    </Icon>
  );
});

IconMaterialDetectorAlarm.displayName = 'OnesyIconMaterialDetectorAlarm';

export default IconMaterialDetectorAlarm;
