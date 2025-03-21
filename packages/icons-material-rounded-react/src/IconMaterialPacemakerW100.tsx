import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPacemakerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PacemakerW100'

      short_name='Pacemaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M268.77-143Q226-143 196-173.16q-30-30.17-30-72.84v-302q-22-21-51-46.5T86-654q0-17 11.5-28.5T126-694q16.74 0 30.87 11Q171-672 180-656q9-16 23.13-27 14.13-11 30.87-11 17 0 28.5 11.5T274-654q0 34-29 59.5T194-548v302q0 31.25 21.82 53.12 21.83 21.88 53 21.88Q300-171 322-192.88q22-21.87 22-53.12v-408q0-70.55 49.73-120.28Q443.45-824 514-824t120.28 49.72Q684-724.55 684-654v27q57 5 95.5 47T818-480v200q0 62-43 105t-105 43q-62 0-105-43t-43-105v-200q0-58 38.5-100t95.5-47v-27q0-59.17-41.38-100.58Q573.24-796 514.12-796T413.5-754.58Q372-713.17 372-654v408q0 42.67-30.23 72.84-30.23 30.16-73 30.16ZM670-160q50 0 85-35t35-85v-200q0-50-35-85t-85-35q-50 0-85 35t-35 85v200q0 50 35 85t85 35Zm0-174q-23 0-38.5 15.5T616-280q0 23 15.5 38.5T670-226q23 0 38.5-15.5T724-280q0-23-15.5-38.5T670-334Zm0 54Z"/>
    </Icon>
  );
});

IconMaterialPacemakerW100.displayName = 'OnesyIconMaterialPacemakerW100';

export default IconMaterialPacemakerW100;
