import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBloodtypeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodtypeW100Filled'

      short_name='Bloodtype'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.82-132Q365-132 288.5-211.06 212-290.11 212-407.86q0-52.14 23.8-105.28 23.8-53.15 59.5-102 35.7-48.86 77-92.29Q413.6-750.86 449-783q7-6 14.88-9.5 7.87-3.5 16.12-3.5t16.13 3.5Q504-789 511-783q35.4 32.14 76.7 75.57 41.3 43.43 77 92.29 35.7 48.85 59.5 102Q748-460 748-407.86q0 117.75-76.68 196.8Q594.63-132 479.82-132ZM400-266h160q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H400q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm66-200v66q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-66h66q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4h-66v-66q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v66h-66q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h66Z"/>
    </Icon>
  );
});

IconMaterialBloodtypeW100Filled.displayName = 'OnesyIconMaterialBloodtypeW100Filled';

export default IconMaterialBloodtypeW100Filled;
