import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiberDvrW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberDvrW100'

      short_name='FiberDvr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M199-376h109q18 0 31-13t13-31v-120q0-18-13-31t-31-13H199q-6 0-10.5 4.5T184-569v178q0 6 4.5 10.5T199-376Zm13-28v-152h96q6 0 11 5t5 11v120q0 6-5 11t-11 5h-96Zm270 0-55-171q-2-4-5-6.5t-7-2.5q-6 0-10 5t-2 11l57 180q2 5 6.5 8.5t9.5 3.5h11q5 0 10-3.5t7-8.5l57-180q2-6-1.5-11t-10.5-5q-4 0-7 2.5t-5 6.5l-55 171Zm162-52h68l30 72q2 4 5 6t8 2q8 0 12-6t1-13l-26-63q21 0 31.5-14t10.5-28v-40q0-18-13-31t-31-13H631q-6 0-10.5 4.5T616-569v179q0 6 4 10t10 4q6 0 10-4t4-10v-66Zm0-28v-72h96q6 0 11 5t5 11v40q0 6-5 11t-11 5h-96ZM152-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h656q26 0 43 17t17 43v416q0 26-17 43t-43 17H152Zm0-28h656q14 0 23-9t9-23v-416q0-14-9-23t-23-9H152q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFiberDvrW100.displayName = 'OnesyIconMaterialFiberDvrW100';

export default IconMaterialFiberDvrW100;
