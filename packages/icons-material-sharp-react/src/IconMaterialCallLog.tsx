import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallLog = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallLog'

      short_name='CallLog'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M758-80q-125 0-247.5-54T288-288Q188-388 134-510T80-758v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T484-240l116-116 200 41v235h-42ZM201-560l66-66-17-94h-89q5 45 15 84.5t25 75.5Zm358 358q40 17 80.5 27t80.5 13v-88l-94-19-67 67ZM201-560Zm358 358Zm-79-598v-80h400v80H480Zm0 160v-80h400v80H480Zm0 160v-80h400v80H480Z"/>
    </Icon>
  );
});

IconMaterialCallLog.displayName = 'OnesyIconMaterialCallLog';

export default IconMaterialCallLog;
