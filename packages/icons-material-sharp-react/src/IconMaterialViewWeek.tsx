import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewWeek = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeek'

      short_name='ViewWeek'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240h160v-480H160v480Zm240 0h160v-480H400v480Zm240 0h160v-480H640v480Zm240 80H80v-640h800v640Z"/>
    </Icon>
  );
});

IconMaterialViewWeek.displayName = 'OnesyIconMaterialViewWeek';

export default IconMaterialViewWeek;
