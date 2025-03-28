import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrameSourceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameSourceW100Filled'

      short_name='FrameSource'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m276-480 78 78q4 4 4 9.5t-4 9.5q-4 5-10 4.5t-10-4.5l-76-76q-9-9-9-21t9-21l76-76q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10l-77 77Zm408 0-78-78q-4-4-4-9.5t4-9.5q4-5 10-4.5t10 4.5l76 76q9 9 9 21t-9 21l-76 76q-4 4-10 4.5t-10-4.5q-4-4-3.5-10t4.5-10l77-77ZM232-172q-26 0-43-17t-17-43v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 12 10 22t22 10h114q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm496 0H614q-6 0-10-4t-4-10q0-6 4-10t10-4h114q12 0 22-10t10-22v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 26-17 43t-43 17ZM172-614v-114q0-26 17-43t43-17h114q6 0 10 4t4 10q0 6-4 10t-10 4H232q-12 0-22 10t-10 22v114q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm588 0v-114q0-12-10-22t-22-10H614q-6 0-10-4t-4-10q0-6 4-10t10-4h114q26 0 43 17t17 43v114q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialFrameSourceW100Filled.displayName = 'OnesyIconMaterialFrameSourceW100Filled';

export default IconMaterialFrameSourceW100Filled;
