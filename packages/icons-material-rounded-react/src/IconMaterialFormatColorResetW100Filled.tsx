import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatColorResetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorResetW100Filled'

      short_name='FormatColorReset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M670-622q35 33 56.5 85.5T748-434q0 15-1.5 30.5T741-372q-3 14-17.5 17.5T698-362L386-673q-9-9-9-21t9-21l63-62q7-7 15-10t16-3q8 0 16.5 3t15.5 10l158 155ZM480-172q-112 0-190-76.5T212-434q0-57 23.5-106.5T294-626L140-780q-4-4-4.5-9.5T140-800q5-5 10-5t10 5l646 646q4 4 4.5 9.5T806-134q-5 5-10 5t-10-5L670-250q-33 36-84.5 57T480-172Z"/>
    </Icon>
  );
});

IconMaterialFormatColorResetW100Filled.displayName = 'OnesyIconMaterialFormatColorResetW100Filled';

export default IconMaterialFormatColorResetW100Filled;
