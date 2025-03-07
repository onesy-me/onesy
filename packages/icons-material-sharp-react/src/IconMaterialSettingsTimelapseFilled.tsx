import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsTimelapseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsTimelapseFilled'

      short_name='SettingsTimelapse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v33.5q0 10-2 20H616q3-10 4.5-19.5T622-480q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 48 27.5 84t70.5 50v266h-70Zm350-40v-240l200 120-200 120Zm-200 0v-240l200 120-200 120Z"/>
    </Icon>
  );
});

IconMaterialSettingsTimelapseFilled.displayName = 'OnesyIconMaterialSettingsTimelapseFilled';

export default IconMaterialSettingsTimelapseFilled;
