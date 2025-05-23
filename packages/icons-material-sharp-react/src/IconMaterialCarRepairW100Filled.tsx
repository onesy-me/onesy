import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarRepairW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarRepairW100Filled'

      short_name='CarRepair'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-144v-120H186v-28h588v28H494v120h-28ZM340-472q11 0 19.5-8.5T368-500q0-11-8.5-19.5T340-528q-11 0-19.5 8.5T312-500q0 11 8.5 19.5T340-472Zm280 0q11 0 19.5-8.5T648-500q0-11-8.5-19.5T620-528q-11 0-19.5 8.5T592-500q0 11 8.5 19.5T620-472Zm-368-96 62.65-180H645l63 180v236h-28v-80H280v80h-28v-236Zm36-20h384l-46-132H334l-46 132Z"/>
    </Icon>
  );
});

IconMaterialCarRepairW100Filled.displayName = 'OnesyIconMaterialCarRepairW100Filled';

export default IconMaterialCarRepairW100Filled;
