import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataAlertW100'

      short_name='DataAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-186v-28h428v28H172Zm468.15-280Q568-466 517-516.85t-51-123Q466-712 516.85-763t123-51Q712-814 763-763.15t51 123Q814-568 763.15-517t-123 51ZM172-506v-28h204q3 8 6.5 14.5T390-506H172Zm0 160v-28h369q14 5 29 9t30 6v13H172Zm454-266h28v-138h-28v138Zm14 86q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialDataAlertW100.displayName = 'OnesyIconMaterialDataAlertW100';

export default IconMaterialDataAlertW100;
