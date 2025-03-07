import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorW100Filled'

      short_name='Floor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M286-134v-150q0-12.75 8.63-21.38Q303.25-314 316-314h150v-150q0-12.75 8.63-21.38Q483.25-494 496-494h150v-150q0-12.75 8.63-21.38Q663.25-674 676-674h150v-126q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v124q0 12.75-8.62 21.37Q836.75-646 824-646H674v150q0 12.75-8.62 21.37Q656.75-466 644-466H494v150q0 12.75-8.62 21.37Q476.75-286 464-286H314v150q0 12.75-8.62 21.37Q296.75-106 284-106H160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h126Z"/>
    </Icon>
  );
});

IconMaterialFloorW100Filled.displayName = 'OnesyIconMaterialFloorW100Filled';

export default IconMaterialFloorW100Filled;
