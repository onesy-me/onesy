import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermDataSettingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDataSettingW100Filled'

      short_name='PermDataSetting'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M730-158q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Zm-14 54-2-28q-26-5-42-14t-30-26l-26 12-16-22 22-18q-8-24-8-46t8-46l-22-18 16-22 26 12q14-18 30-26.5t42-13.5l2-28h28l2 28q26 5 42 13.5t30 26.5l26-12 16 22-22 18q8 24 8 46t-8 46l22 18-16 22-26-12q-14 17-30 26t-42 14l-2 28h-28Zm-584-28 696-696v361q-23-11-48-16.5t-51-5.5q-102 0-173 71t-71 173q0 26 7.5 58t20.5 55H132Z"/>
    </Icon>
  );
});

IconMaterialPermDataSettingW100Filled.displayName = 'OnesyIconMaterialPermDataSettingW100Filled';

export default IconMaterialPermDataSettingW100Filled;
