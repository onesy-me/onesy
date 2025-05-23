import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeHeatOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatOffW100Filled'

      short_name='ModeHeatOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M561-616q20 0 38-6t35-17q8-5 16.5-4t15.5 7q38 38 60 88.5T748-440q0 38-9.5 72.5T711-303q-10 16-28.5 17.5T650-298L312-636q-9-9-9.5-21.5T310-680q21-25 43.5-45.5T397-763q10-8 20.5-2.5T428-748q0 61 41 96.5t92 35.5ZM394-362q-17 17-26.5 38.5T358-278q0 14 3.5 26.5T370-227q5 11-3.5 18t-19.5 2q-23-13-42.5-31T268-277q-26-34-41-75.5T212-440q0-56 17.5-103.5T275-633l195 195-76 76Zm86 176q-39 0-66.5-27T386-278q0-18 6.5-34t20.5-30l67-66 67 66q13 13 20 29t7 35q0 38-27.5 65T480-186ZM784-84 136-732q-4-4-4.5-9.5T136-752q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-84q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialModeHeatOffW100Filled.displayName = 'OnesyIconMaterialModeHeatOffW100Filled';

export default IconMaterialModeHeatOffW100Filled;
