import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScheduleSendW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleSendW100'

      short_name='ScheduleSend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M182-236v-492l467 201q-13 2-27.5 4.5T598-516L210-680v160l180 40-180 40v160l249-106q-4 8-7 19t-4 16L182-236Zm488 84q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm66-62 20-20-72-72v-108h-28v120l80 80ZM210-386v-294 400-106Z"/>
    </Icon>
  );
});

IconMaterialScheduleSendW100.displayName = 'OnesyIconMaterialScheduleSendW100';

export default IconMaterialScheduleSendW100;
