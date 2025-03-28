import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOnFilled'

      short_name='AlarmOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-298 226-226-57-57-169 169-85-85-57 57 142 142Zm42 218q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56Z"/>
    </Icon>
  );
});

IconMaterialAlarmOnFilled.displayName = 'OnesyIconMaterialAlarmOnFilled';

export default IconMaterialAlarmOnFilled;
