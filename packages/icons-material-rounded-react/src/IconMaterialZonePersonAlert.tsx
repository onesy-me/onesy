import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZonePersonAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonAlert'

      short_name='ZonePersonAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-80q0-17 11.5-28.5T120-360q17 0 28.5 11.5T160-320v80h80q17 0 28.5 11.5T280-200q0 17-11.5 28.5T240-160h-80Zm192-160 40-204-72 28v96q0 17-11.5 28.5T280-360q-17 0-28.5-11.5T240-400v-122q0-12 6.5-21.5T264-558l134-58q35-15 51.5-19.5T480-640q21 0 39 11t29 29l40 64 8 12q4 6 9 11-49 32-81 82.5T483-320H352Zm188-340q-33 0-56.5-23.5T460-740q0-33 23.5-56.5T540-820q33 0 56.5 23.5T620-740q0 33-23.5 56.5T540-660ZM80-800v-80q0-33 23.5-56.5T160-960h80q17 0 28.5 11.5T280-920q0 17-11.5 28.5T240-880h-80v80q0 17-11.5 28.5T120-760q-17 0-28.5-11.5T80-800Zm720 0v-80h-80q-17 0-28.5-11.5T680-920q0-17 11.5-28.5T720-960h80q33 0 56.5 23.5T880-880v80q0 17-11.5 28.5T840-760q-17 0-28.5-11.5T800-800ZM760-80q-83 0-141.5-58.5T560-280q0-83 58.5-141.5T760-480q83 0 141.5 58.5T960-280q0 83-58.5 141.5T760-80Zm0-160q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialZonePersonAlert.displayName = 'OnesyIconMaterialZonePersonAlert';

export default IconMaterialZonePersonAlert;
