import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricBoltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBoltW100Filled'

      short_name='ElectricBolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m477-406-238-27q-20-2-25.5-21t9.5-32l386-339q2-2 4.5-3t7.5-1q8 0 13 7t0 15L480-553l240 27q20 2 26 20.5t-9 31.5L351-134q-2 2-4.5 2.5t-7.5.5q-8 0-12-7t0-14l150-254Z"/>
    </Icon>
  );
});

IconMaterialElectricBoltW100Filled.displayName = 'OnesyIconMaterialElectricBoltW100Filled';

export default IconMaterialElectricBoltW100Filled;
