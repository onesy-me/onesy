import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContrastRtlOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContrastRtlOff'

      short_name='ContrastRtlOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-57-90-89q-48 32-103.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-62 17-117.5T146-701l-91-91q-12-12-11.5-28.5T56-849q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM480-160q45 0 85.5-12t76.5-33L480-367v207Zm400-320q0 45-9.5 87T844-313q-7 15-23 19t-30-4q-14-8-19-24.5t2-31.5q13-29 19.5-60.5T800-480q0-133-93.5-226.5T480-800v157q0 14-12 19t-22-5L308-767q-18-18-14.5-43.5T320-847q37-16 77-24.5t83-8.5q83 0 156 31.5T763-763q54 54 85.5 127T880-480Z"/>
    </Icon>
  );
});

IconMaterialContrastRtlOff.displayName = 'OnesyIconMaterialContrastRtlOff';

export default IconMaterialContrastRtlOff;
