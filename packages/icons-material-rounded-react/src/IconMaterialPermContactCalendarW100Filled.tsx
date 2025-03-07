import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermContactCalendarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermContactCalendarW100Filled'

      short_name='PermContactCalendar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-192q54-53 125.5-83.5T480-306q83 0 154.5 30.5T760-192v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496Zm280-234q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 48-33 81t-81 33ZM232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-76q0-7 4.5-11.5T328-840q7 0 11.5 4.5T344-824v76h276v-78q0-6 4-10t10-4q6 0 10 4t4 10v78h80q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialPermContactCalendarW100Filled.displayName = 'OnesyIconMaterialPermContactCalendarW100Filled';

export default IconMaterialPermContactCalendarW100Filled;
