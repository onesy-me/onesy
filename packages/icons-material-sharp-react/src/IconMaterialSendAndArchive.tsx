import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendAndArchive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendAndArchive'

      short_name='SendAndArchive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-160 120-120-28-28-72 72v-164h-40v164l-72-72-28 28 120 120Zm-560 0v-640l572 240h-12q-35 0-66 8t-60 22L200-680v140l240 60-240 60v140l216-92q-8 23-12 45.5t-4 46.5v2L120-160Zm560 80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM200-372v-308 400-92Z"/>
    </Icon>
  );
});

IconMaterialSendAndArchive.displayName = 'OnesyIconMaterialSendAndArchive';

export default IconMaterialSendAndArchive;
