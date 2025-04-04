import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorW100Filled'

      short_name='Detector'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-74 0-142-25.5T213-271l20-20q52 45 115.5 68T481-200q68 0 131.5-22.5T728-289l20 19q-57 48-125.5 73T480-172Zm0-148q-44 0-85-15t-75-42l20-20q30 24 66.5 36.5T481-348q38 0 74-12.5t66-36.5l20 20q-35 28-75.5 42.5T480-320ZM294-652l30 80h312l30-80H294Zm9 108-39-108h-92v-136h616v136h-92l-42 108H303Z"/>
    </Icon>
  );
});

IconMaterialDetectorW100Filled.displayName = 'OnesyIconMaterialDetectorW100Filled';

export default IconMaterialDetectorW100Filled;
