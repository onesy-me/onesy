import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeRepairServiceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairServiceW100'

      short_name='HomeRepairService'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-414ZM132-242v-314q0-26 17-43t43-17h114v-72q0-26 17-43t43-17h228q26 0 43 17t17 43v72h114q26 0 43 17t17 43v314q0 12.75-8.62 21.37Q810.75-212 798-212H162q-12.75 0-21.37-8.63Q132-229.25 132-242Zm156-158v26q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-26H160v160h640v-160H700v26q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-26H288ZM160-556v128h100v-26q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v26h384v-26q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v26h100v-128q0-12-10-22t-22-10H192q-12 0-22 10t-10 22Zm174-60h292v-72q0-12-10-22t-22-10H366q-12 0-22 10t-10 22v72Z"/>
    </Icon>
  );
});

IconMaterialHomeRepairServiceW100.displayName = 'OnesyIconMaterialHomeRepairServiceW100';

export default IconMaterialHomeRepairServiceW100;
