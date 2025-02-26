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
      <path d="M728-332 364-694l116-114 190 186q35 33 56.5 85.5T748-434q0 24-4.5 49.5T728-332Zm68 208L670-250q-33 36-84.5 57T480-172q-112 0-190-76.5T212-434q0-57 23.5-106.5T294-626L130-790l20-20 666 666-20 20Z"/>
    </Icon>
  );
});

IconMaterialFormatColorResetW100Filled.displayName = 'OnesyIconMaterialFormatColorResetW100Filled';

export default IconMaterialFormatColorResetW100Filled;
