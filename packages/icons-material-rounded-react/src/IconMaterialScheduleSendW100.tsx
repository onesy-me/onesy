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
      <path d="M182-281.65v-400.41Q182-699 195.5-708t28.5-2l382 165q7.04 2.87 8.52 8.44 1.48 5.56-.62 10.65-2.1 5.09-7 8T594-518L210-680v160l81 18q9 2.28 13.5 8.34 4.5 6.07 4.5 13.66t-4.5 13.66Q300-460.28 291-458l-81 18v160l222-94q6-3 10.85-.38 4.84 2.61 7 7.5 2.15 4.88.67 10.44-1.48 5.57-8.52 8.44l-218 94q-15 7-28.5-1.86-13.5-8.85-13.5-25.79ZM670-152q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm14-153.58V-400q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v94q0 5.57 2 10.78 2 5.22 7 10.22l61 61q4 4 9.5 4.5T746-224q5-5 5-10t-5-10l-62-61.58ZM390-480Z"/>
    </Icon>
  );
});

IconMaterialScheduleSendW100.displayName = 'OnesyIconMaterialScheduleSendW100';

export default IconMaterialScheduleSendW100;
