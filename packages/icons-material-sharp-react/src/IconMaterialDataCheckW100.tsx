import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataCheckW100'

      short_name='DataCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m612-559 133-133-20-20-113 113-57-56-20 20 77 76ZM172-186v-28h428v28H172Zm468.15-280Q568-466 517-516.85t-51-123Q466-712 516.85-763t123-51Q712-814 763-763.15t51 123Q814-568 763.15-517t-123 51ZM172-506v-28h204q3 8 6.5 14.5T390-506H172Zm0 160v-28h369q14 5 29 9t30 6v13H172Z"/>
    </Icon>
  );
});

IconMaterialDataCheckW100.displayName = 'OnesyIconMaterialDataCheckW100';

export default IconMaterialDataCheckW100;
