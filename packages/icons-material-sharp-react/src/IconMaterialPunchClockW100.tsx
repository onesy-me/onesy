import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPunchClockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockW100'

      short_name='PunchClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-132v-556h111v-140h395v140h110v556H172Zm139-556h339v-112H311v112ZM200-160h560v-500H200v500Zm279-80q70.97 0 120.98-50Q650-340 650-409.5t-50.02-120Q549.97-580 479-580q-70.14 0-119.57 50.5Q310-479 310-409.5T359.43-290q49.43 50 119.57 50Zm.46-26Q420-266 378.5-307.5 337-349 337-409t41.59-101.5Q420.17-552 479-552q59.66 0 101.83 41.5T623-409q0 60-42.04 101.5-42.03 41.5-101.5 41.5ZM522-348l19-19-48-49v-82h-26v94l55 56Zm-42-62Z"/>
    </Icon>
  );
});

IconMaterialPunchClockW100.displayName = 'OnesyIconMaterialPunchClockW100';

export default IconMaterialPunchClockW100;
