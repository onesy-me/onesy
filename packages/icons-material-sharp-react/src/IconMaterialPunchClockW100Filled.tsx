import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPunchClockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockW100Filled'

      short_name='PunchClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-132v-556h111v-140h395v140h110v556H172Zm139-556h339v-112H311v112Zm168.29 434Q544-254 590-300t46-109.5q0-63.5-46-110T479.29-566q-64.7 0-110 46.5Q324-473 324-409.5T369.29-300q45.3 46 110 46ZM522-348l19-19-48-49v-82h-26v94l55 56Z"/>
    </Icon>
  );
});

IconMaterialPunchClockW100Filled.displayName = 'OnesyIconMaterialPunchClockW100Filled';

export default IconMaterialPunchClockW100Filled;
