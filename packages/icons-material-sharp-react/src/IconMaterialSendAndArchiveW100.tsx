import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendAndArchiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendAndArchiveW100'

      short_name='SendAndArchive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m670-191 106-106-20-20-72 72v-164h-28v164l-72-72-20 20 106 106Zm-488-45v-492l467 201q-13 2-27.5 4.5T598-516L210-680v160l180 40-180 40v160l249-106q-4 8-7 19t-4 16L182-236Zm488 84q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM210-386v-294 400-106Z"/>
    </Icon>
  );
});

IconMaterialSendAndArchiveW100.displayName = 'OnesyIconMaterialSendAndArchiveW100';

export default IconMaterialSendAndArchiveW100;
