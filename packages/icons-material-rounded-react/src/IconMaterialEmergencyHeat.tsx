import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyHeat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHeat'

      short_name='EmergencyHeat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80q-134 0-227-93t-93-227q0-113 67-217t184-182q22-15 45.5-1.5T440-760v52q0 34 23.5 57t57.5 23q17 0 32.5-7.5T581-657q8-10 20.5-12.5T625-664q63 45 99 115t36 149q0 134-93 227T440-80ZM200-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T608-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T361-690q-78 66-119.5 140.5T200-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T497-292l-57-56Zm400-172q-17 0-28.5-11.5T800-560q0-17 11.5-28.5T840-600q17 0 28.5 11.5T880-560q0 17-11.5 28.5T840-520Zm0-120q-17 0-28.5-11.5T800-680v-120q0-17 11.5-28.5T840-840q17 0 28.5 11.5T880-800v120q0 17-11.5 28.5T840-640Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHeat.displayName = 'OnesyIconMaterialEmergencyHeat';

export default IconMaterialEmergencyHeat;
