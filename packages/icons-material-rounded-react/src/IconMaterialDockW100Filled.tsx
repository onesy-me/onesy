import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockW100Filled'

      short_name='Dock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-138.04q0-5.96 4.02-9.96 4.03-4 9.98-4h240q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H360q-5.95 0-9.98-4.04-4.02-4.03-4.02-10Zm6.33-93.96Q326-232 309-249t-17-43v-496q0-26 17-43t43.33-17h255.34Q634-848 651-831t17 43v496q0 26-17 43t-43.33 17H352.33ZM320-354h320v-372H320v372Z"/>
    </Icon>
  );
});

IconMaterialDockW100Filled.displayName = 'OnesyIconMaterialDockW100Filled';

export default IconMaterialDockW100Filled;
