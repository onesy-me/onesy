import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvChargerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvChargerW100Filled'

      short_name='EvCharger'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-534h240v-194q0-12-10-22t-22-10H272q-12 0-22 10t-10 22v194Zm238.4 362H241.58q-12.58 0-21.08-8.63-8.5-8.62-8.5-21.37v-526q0-26 17-43t43-17h176q26 0 43 17t17 43v228h36q24.86 0 42.43 17.57T604-440v184q0 23 18.5 39.5t42.3 16.5q25.2 0 43.2-16.5 18-16.5 18-39.5v-350h-15q-12.75 0-21.37-8.63Q681-623.25 681-636v-43.5q0-5.8 4.5-10.15Q690-694 696-694v-26q0-5.6 4.2-9.8 4.2-4.2 9.8-4.2 5.6 0 9.8 4.2 4.2 4.2 4.2 9.8v26h32v-26q0-5.6 4.2-9.8 4.2-4.2 9.8-4.2 5.6 0 9.8 4.2 4.2 4.2 4.2 9.8v26q6 0 10.5 4.35t4.5 10.15v43.5q0 12.75-8.62 21.37Q781.75-606 769-606h-15v350q0 35-25.76 59.5T665.32-172q-36.32 0-62.82-24.5T576-256v-184q0-14-9-23t-23-9h-36v270q0 12.75-8.51 21.37-8.51 8.63-21.09 8.63ZM348-246l62-120h-37v-95l-63 120h38v95Z"/>
    </Icon>
  );
});

IconMaterialEvChargerW100Filled.displayName = 'OnesyIconMaterialEvChargerW100Filled';

export default IconMaterialEvChargerW100Filled;
