import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCancelScheduleSend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelScheduleSend'

      short_name='CancelScheduleSend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m609-181 70-70 70 70 30-30-69-69 70-70-30-30-70 70-70-70-30 30 70 70-70 70 29 29Zm-489 21v-640l572 240h-12q-35 0-66 8t-60 22L200-680v140l240 60-240 60v140l216-92q-8 23-12 45.5t-4 46.5v2L120-160Zm560 80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM200-372v-308 400-92Z"/>
    </Icon>
  );
});

IconMaterialCancelScheduleSend.displayName = 'OnesyIconMaterialCancelScheduleSend';

export default IconMaterialCancelScheduleSend;
