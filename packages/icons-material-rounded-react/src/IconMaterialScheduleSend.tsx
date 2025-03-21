import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScheduleSend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleSend'

      short_name='ScheduleSend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-220v-520q0-22 17.5-33.5T175-777l399 167q19 8 23 23.5t-2 29.5q-6 14-20 22t-33 0L200-680v140l124 31q11 3 16.5 11t5.5 18q0 10-5.5 18T324-451l-124 31v140l149-63q19-8 32.5-.5T401-322q6 14 2 29.5T380-269l-204 86q-20 8-38-3.5T120-220ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm20-208v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v91q0 8 3 15.5t9 13.5l60 60q6 6 14 6t14-6q6-6 6-14t-6-14l-60-60ZM337-480Z"/>
    </Icon>
  );
});

IconMaterialScheduleSend.displayName = 'OnesyIconMaterialScheduleSend';

export default IconMaterialScheduleSend;
