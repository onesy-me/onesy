import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialManageAccountsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageAccountsW100'

      short_name='ManageAccounts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-512q-44.55 0-76.27-31.72Q292-575.45 292-620t31.73-76.28Q355.45-728 400-728t76.27 31.72Q508-664.55 508-620t-31.73 76.28Q444.55-512 400-512ZM132-232v-52q0-26 13-43.5t37-28.5q48-23 96-37.5T400-408h16q-3 8-4.5 15t-3.5 13h-8q-66 0-114 12.5T196-332q-21 11-28.5 22t-7.5 26v24h252q2 6 4.5 14t5.5 14H132Zm519 13-4-42q-18-3-34-12t-28-23l-39 17-10-17 34-24q-8-18-8-38t8-38l-33-26 10-17 38 18q11-14 27.5-22.5T647-455l4-42h20l3 42q18 3 34.5 11.5T736-421l38-18 10 17-33 26q8 18.32 8 38.16 0 19.84-8 37.84l34 24-10 17-39-17q-12 14-28 23t-34 12l-3 42h-20Zm9.09-69q28.91 0 49.41-20.59 20.5-20.59 20.5-49.5t-20.59-49.41q-20.59-20.5-49.5-20.5t-49.41 20.59q-20.5 20.59-20.5 49.5t20.59 49.41q20.59 20.5 49.5 20.5ZM400-540q33 0 56.5-23.5T480-620q0-33-23.5-56.5T400-700q-33 0-56.5 23.5T320-620q0 33 23.5 56.5T400-540Zm0-80Zm12 360Z"/>
    </Icon>
  );
});

IconMaterialManageAccountsW100.displayName = 'OnesyIconMaterialManageAccountsW100';

export default IconMaterialManageAccountsW100;
