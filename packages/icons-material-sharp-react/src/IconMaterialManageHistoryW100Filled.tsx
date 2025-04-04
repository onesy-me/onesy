import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialManageHistoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageHistoryW100Filled'

      short_name='ManageHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M222-640v-144h28v96q45-47 104-73.5T478-788q128 0 218 90t90 218v14h-28v-14q0-117-81.5-198.5T478-760q-60 0-113 24.5T270-668h96v28H222Zm-49 200h28q15 95 82.5 161T445-202l18 30q-112-5-194-80.5T173-440Zm391 63-97-97v-206h28v194l84 84-15 25ZM769-26l-6-45q-21-3-40-13.5T690-112l-43 14-10-16 35-27q-9-21-9-44t9-46l-37-29 12-18 44 17q14-16 32-26t40-14l6-45h20l6 45q23 4 42 15t32 28l46-18 10 20-38 29q8 23 8 44t-8 39l40 30-10 16-48-16q-13 17-32 28.5T795-71l-6 45h-20Zm10-72q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Z"/>
    </Icon>
  );
});

IconMaterialManageHistoryW100Filled.displayName = 'OnesyIconMaterialManageHistoryW100Filled';

export default IconMaterialManageHistoryW100Filled;
