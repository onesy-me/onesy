import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial2kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kW100Filled'

      short_name='2k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m542-472 94 92q2 2 10 4 10 0 13.5-9t-3.5-16l-84-81 85-79q7-6 3-14.5t-13-8.5q-2 0-4.57 1.09-2.56 1.09-4.43 2.91l-96 90v-80q0-6.07-3.95-10.03-3.96-3.97-10-3.97-6.05 0-10.05 3.97-4 3.96-4 10.03v180q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-82Zm-234 68v-62h92q11.9 0 19.95-8.05Q428-482.1 428-494v-62q0-11.9-8.05-19.95Q411.9-584 400-584H294q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h106v62h-92q-11.9 0-19.95 8.05Q280-477.9 280-466v76q0 6.07 3.97 10.03Q287.93-376 294-376h120q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4H308Zm-76 232q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterial2kW100Filled.displayName = 'OnesyIconMaterial2kW100Filled';

export default IconMaterial2kW100Filled;
