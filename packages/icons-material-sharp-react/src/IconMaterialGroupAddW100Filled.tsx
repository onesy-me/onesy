import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroupAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupAddW100Filled'

      short_name='GroupAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M510-514q20-21 27-49t7-57q0-29-7-57t-27-49q41 3 67.5 33.5T604-620q0 42-26.5 72.5T510-514Zm194 282v-52q0-27.45-9-52.22Q686-361 664-376q38 11 69 33t31 59v52h-60Zm60-234v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Zm-408-46q-44.55 0-76.27-31.72Q248-575.45 248-620t31.73-76.28Q311.45-728 356-728t76.27 31.72Q464-664.55 464-620t-31.73 76.28Q400.55-512 356-512ZM88-232v-52q0-22 13.5-41.5T138-356q55-26 109.5-39T356-408q54 0 108.5 13T574-356q23 11 36.5 30.5T624-284v52H88Z"/>
    </Icon>
  );
});

IconMaterialGroupAddW100Filled.displayName = 'OnesyIconMaterialGroupAddW100Filled';

export default IconMaterialGroupAddW100Filled;
