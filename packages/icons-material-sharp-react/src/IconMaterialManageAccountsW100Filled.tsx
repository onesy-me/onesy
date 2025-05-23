import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialManageAccountsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageAccountsW100Filled'

      short_name='ManageAccounts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m651-219-4-42q-18-3-34-12t-28-23l-39 17-10-17 34-24q-8-18-8-38t8-38l-33-26 10-17 38 18q11-14 27.5-22.5T647-455l4-42h20l3 42q18 3 34.5 11.5T736-421l38-18 10 17-33 26q8 18 8 38t-8 38l34 24-10 17-39-17q-12 14-28 23t-34 12l-3 42h-20Zm-519-13v-52q0-26 13-43.5t37-28.5q48-23 96-37.5T400-408h16q-14 36-12.5 89.5T422-232H132Zm528-56q29 0 49.5-20.5T730-358q0-29-20.5-49.5T660-428q-29 0-49.5 20.5T590-358q0 29 20.5 49.5T660-288ZM400-512q-45 0-76.5-31.5T292-620q0-45 31.5-76.5T400-728q45 0 76.5 31.5T508-620q0 45-31.5 76.5T400-512Z"/>
    </Icon>
  );
});

IconMaterialManageAccountsW100Filled.displayName = 'OnesyIconMaterialManageAccountsW100Filled';

export default IconMaterialManageAccountsW100Filled;
