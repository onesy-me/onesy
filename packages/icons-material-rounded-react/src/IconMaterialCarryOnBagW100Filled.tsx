import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarryOnBagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagW100Filled'

      short_name='CarryOnBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M587.88-124Q562-124 544-142.12q-18-18.12-18-44T544.12-230q18.12-18 44-18T632-229.88q18 18.12 18 44T631.88-142q-18.12 18-44 18ZM352-172q-24.75 0-42.37-17.63Q292-207.25 292-232v-336q0-24.75 17.63-42.38Q327.25-628 352-628h34v456h-34Zm62 0v-456h146v-172h-46q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h44q12.75 0 21.38 8.62Q588-810.75 588-798v522q-38 0-64 26.25T498-186v6.83q0 3.17 1 7.17h-85Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagW100Filled.displayName = 'OnesyIconMaterialCarryOnBagW100Filled';

export default IconMaterialCarryOnBagW100Filled;
