import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterHdrW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterHdrW100Filled'

      short_name='FilterHdr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m175-340 86-116q4.5-6 10.88-9 6.37-3 13.12-3 6.75 0 13.13 3 6.37 3 10.87 9l90 120q6.09 8 14.22 12 8.12 4 18.28 4 25.39 0 36.45-22.5Q479-365 464-385l-29-39q-6-8.32-6-18.16t6-17.84l106-142q4.5-6 10.88-9 6.37-3 13.12-3 6.75 0 13.13 3 6.37 3 10.87 9l196 262q11 15 2.81 31.5T761-292H199.5q-19.5 0-27.5-16.5t3-31.5Z"/>
    </Icon>
  );
});

IconMaterialFilterHdrW100Filled.displayName = 'OnesyIconMaterialFilterHdrW100Filled';

export default IconMaterialFilterHdrW100Filled;
