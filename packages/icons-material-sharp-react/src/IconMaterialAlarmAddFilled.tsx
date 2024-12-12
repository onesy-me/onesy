import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmAddFilled'

      short_name='AlarmAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280h80v-120h120v-80H520v-120h-80v120H320v80h120v120Zm40 200q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56Z"/>
    </Icon>
  );
});

IconMaterialAlarmAddFilled.displayName = 'OnesyIconMaterialAlarmAddFilled';

export default IconMaterialAlarmAddFilled;
