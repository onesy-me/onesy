import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaPhotosphereW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaPhotosphereW100Filled'

      short_name='PanoramaPhotosphere'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-166q-87 0-161-45T200-335L92-378v-204l108-43q44-79 118-124t161-45q87 0 161 45t118 124l110 43v204l-110 43q-44 79-118 124t-161 45Zm0-28q75 0 135.5-34.5T719-324q-56 15-116.5 23.5T479-292q-63 0-123.5-8.5T239-324q44 61 104.5 95.5T479-194Zm0-572q-75 0-135.5 34.5T239-636q56-15 116.5-23.5T479-668q63 0 123.5 8.5T719-636q-44-61-104.5-95.5T479-766Z"/>
    </Icon>
  );
});

IconMaterialPanoramaPhotosphereW100Filled.displayName = 'OnesyIconMaterialPanoramaPhotosphereW100Filled';

export default IconMaterialPanoramaPhotosphereW100Filled;
