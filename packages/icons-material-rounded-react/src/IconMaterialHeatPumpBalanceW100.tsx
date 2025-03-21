import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeatPumpBalanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpBalanceW100'

      short_name='HeatPumpBalance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M871-648H760q-27 0-46.5 19.5T694-582v216q0 39-27.5 66.5T600-272q-39 0-66.5-27.5T506-366v-176q0-27-19.5-46.5T440-608q-27 0-46.5 19.5T374-542v176q0 39-27.5 66.5T280-272q-39 0-66.5-27.5T186-366v-256q0-6 4-10t10-4q6 0 10 4t4 10v256q0 27 19.5 46.5T280-300q27 0 46.5-19.5T346-366v-176q0-39 27.5-66.5T440-636q39 0 66.5 27.5T534-542v176q0 27 19.5 46.5T600-300q27 0 46.5-19.5T666-366v-216q0-39 27.5-66.5T760-676h110l-64-64q-4-4-4-9.5t4-9.5q4-5 10-4.5t10 4.5l76 76q9 9 9 21t-9 21l-76 75q-4 4-10 4.5t-10-4.5q-4-4-3.5-10t4.5-10l64-62ZM152-148q-25 0-42.5-17.5T92-208v-230q0-13 8.5-21.5T122-468h716q13 0 21.5 8.5T868-438v230q0 25-17.5 42.5T808-148H152Zm0-28h656q14 0 23-9t9-23v-232H120v232q0 14 9 23t23 9Zm656-264h32-720 688Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpBalanceW100.displayName = 'OnesyIconMaterialHeatPumpBalanceW100';

export default IconMaterialHeatPumpBalanceW100;
