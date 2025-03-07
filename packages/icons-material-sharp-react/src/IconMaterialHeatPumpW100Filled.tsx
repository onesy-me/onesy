import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeatPumpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpW100Filled'

      short_name='HeatPump'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-294v-153L358-339q23 20 50.5 31.5T466-294Zm28 0q30-2 57-13.5t50-31.5L494-446v152Zm127-65q20-23 30.5-50.5T665-466H514l107 107ZM514-494h152q-2-30-13.5-57T621-601L514-494Zm-20-19 108-108q-23-20-50.5-32T494-667v154Zm-14 56q10 0 16.5-6.5T503-480q0-10-6.5-16.5T480-503q-10 0-16.5 6.5T457-480q0 10 6.5 16.5T480-457Zm-14-57v-152q-30 2-57 13.5T359-621l107 107Zm-173 20h153L338-602q-20 23-31.5 50.5T293-494Zm45 136 108-108H294q2 30 13 57.5t31 50.5ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpW100Filled.displayName = 'OnesyIconMaterialHeatPumpW100Filled';

export default IconMaterialHeatPumpW100Filled;
