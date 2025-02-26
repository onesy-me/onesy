import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchW100Filled'

      short_name='Switch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M584-306q12.75 0 21.38-8.63Q614-323.25 614-336v-288q0-12.75-8.62-21.38Q596.75-654 584-654H376q-12.75 0-21.37 8.62Q346-636.75 346-624v288q0 12.75 8.63 21.37Q363.25-306 376-306h208Zm-210-28v-292h212v292H374ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm248.18-318q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialSwitchW100Filled.displayName = 'OnesyIconMaterialSwitchW100Filled';

export default IconMaterialSwitchW100Filled;
