import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermContactCalendarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermContactCalendarW100'

      short_name='PermContactCalendar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-278q-72 0-140 27.5T213-166q4 3 8 4.5t9 1.5h498q5 0 8.5-1.5t7.5-4.5q-57-57-124-84.5T480-278Zm-280 86q54-53 125.5-83.5T480-306q83 0 154.5 30.5T760-192v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496Zm280-234q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 48-33 81t-81 33Zm0-28q35 0 60.5-25.5T566-540q0-35-25.5-60.5T480-626q-35 0-60.5 25.5T394-540q0 35 25.5 60.5T480-454ZM232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-76q0-7 4.5-11.5T328-840q7 0 11.5 4.5T344-824v76h276v-78q0-6 4-10t10-4q6 0 10 4t4 10v78h80q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm248-408Zm0 380h264-531 267Z"/>
    </Icon>
  );
});

IconMaterialPermContactCalendarW100.displayName = 'OnesyIconMaterialPermContactCalendarW100';

export default IconMaterialPermContactCalendarW100;
