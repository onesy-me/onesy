import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScheduleSendFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleSendFilled'

      short_name='ScheduleSend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-200q6-6 6-14t-6-14l-60-60v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v91q0 8 3 15.5t9 13.5l60 60q6 6 14 6t14-6Zm-640-20v-149q0-14 8-25t22-14l174-43q10-2 16-10t6-19q0-11-6-19t-16-10l-174-43q-14-3-22-14t-8-25v-149q0-22 17.5-33.5T175-777l404 169q23 9 20.5 35T571-538q-32 11-58 31.5T466-460q-27 32-43 69.5T402-311q-2 15-10 27.5T370-265l-194 82q-20 8-38-3.5T120-220ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Z"/>
    </Icon>
  );
});

IconMaterialScheduleSendFilled.displayName = 'OnesyIconMaterialScheduleSendFilled';

export default IconMaterialScheduleSendFilled;
