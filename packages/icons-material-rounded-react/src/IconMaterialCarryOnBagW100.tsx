import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarryOnBagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagW100'

      short_name='CarryOnBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M588-276q38 0 64 26.25T678-186q0 37.5-26.25 63.75T588-96q-34 0-59-21.5T499-172H352q-24.75 0-42.37-17.63Q292-207.25 292-232v-336q0-24.75 17.63-42.38Q327.25-628 352-628h208v-172h-46q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h44q12.75 0 21.38 8.62Q588-810.75 588-798v522Zm-202 76v-400h-34q-14 0-23 9t-9 23v336q0 14 9 23t23 9h34Zm28-400v400h86q2-26 18.5-45t41.5-26v-329H414Zm174.12 476Q614-124 632-142.12q18-18.12 18-44T631.88-230q-18.12-18-44-18T544-229.88q-18 18.12-18 44T544.12-142q18.12 18 44 18Zm-.12-62ZM414-400Zm-28 200v-400 400Zm28-400v400-400Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagW100.displayName = 'OnesyIconMaterialCarryOnBagW100';

export default IconMaterialCarryOnBagW100;
