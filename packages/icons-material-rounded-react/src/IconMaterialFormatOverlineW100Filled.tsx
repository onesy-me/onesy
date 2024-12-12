import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatOverlineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatOverlineW100Filled'

      short_name='FormatOverline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M250-786q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h460q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H250Zm229.97 630Q378-156 307-227.03t-71-173Q236-502 307.03-573t173-71Q582-644 653-572.97t71 173Q724-298 652.97-227t-173 71Zm.03-28q90 0 153-63t63-153q0-90-63-153t-153-63q-90 0-153 63t-63 153q0 90 63 153t153 63Z"/>
    </Icon>
  );
});

IconMaterialFormatOverlineW100Filled.displayName = 'OnesyIconMaterialFormatOverlineW100Filled';

export default IconMaterialFormatOverlineW100Filled;
