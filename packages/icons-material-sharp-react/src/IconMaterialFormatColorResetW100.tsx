import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatColorResetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorResetW100'

      short_name='FormatColorReset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M748-434q0 24-4.5 49.5T728-332l-22-22q8-17 11-37t3-43q0-47-17.5-90T650-600L480-768l-96 94-20-20 116-114 190 186q35 33 56.5 85.5T748-434Zm48 310L670-250q-33 36-84.5 57T480-172q-112 0-190-76.5T212-434q0-57 23.5-106.5T294-626L130-790l20-20 666 666-20 20Zm-316-76q56 0 101-21.5t69-48.5L314-606q-29 29-51.5 73.5T240-434q0 98 70 166t170 68Zm0-240Zm66-73Z"/>
    </Icon>
  );
});

IconMaterialFormatColorResetW100.displayName = 'OnesyIconMaterialFormatColorResetW100';

export default IconMaterialFormatColorResetW100;
