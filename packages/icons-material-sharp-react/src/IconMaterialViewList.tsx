import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewList = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewList'

      short_name='ViewList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240h440v-107H360v107ZM160-613h120v-107H160v107Zm0 187h120v-107H160v107Zm0 186h120v-107H160v107Zm200-186h440v-107H360v107Zm0-187h440v-107H360v107ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialViewList.displayName = 'OnesyIconMaterialViewList';

export default IconMaterialViewList;
