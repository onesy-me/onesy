import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsAccountBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAccountBoxW100Filled'

      short_name='SettingsAccountBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-100v-320h320v320H540Zm48-48h224v-26q-20-25-49-39.5T700-228q-34 0-63 14.5T588-174v26Zm112-112q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14ZM416-132l-14-112q-21-6-46.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-89-67 64-110 102 43q20-17 43.5-30.5T401-716l15-112h128l14 113q26 9 45.5 20.5T644-665l106-43 64 110-93 70q0 2 .5 4t.5 4H556q-11-21-31.5-34.5T478-568q-37 0-62.5 25.5T390-480q0 27 13.5 48t36.5 32v268h-24Z"/>
    </Icon>
  );
});

IconMaterialSettingsAccountBoxW100Filled.displayName = 'OnesyIconMaterialSettingsAccountBoxW100Filled';

export default IconMaterialSettingsAccountBoxW100Filled;
