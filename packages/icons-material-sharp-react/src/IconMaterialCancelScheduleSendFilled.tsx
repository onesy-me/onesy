import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCancelScheduleSendFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelScheduleSendFilled'

      short_name='CancelScheduleSend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m609-181 70-70 70 70 30-30-69-69 70-70-30-30-70 70-70-70-30 30 70 70-70 70 29 29Zm-489 21v-240l320-80-320-80v-240l572 240h-12q-117 0-198.5 82.5T400-278L120-160Zm560 80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Z"/>
    </Icon>
  );
});

IconMaterialCancelScheduleSendFilled.displayName = 'OnesyIconMaterialCancelScheduleSendFilled';

export default IconMaterialCancelScheduleSendFilled;
