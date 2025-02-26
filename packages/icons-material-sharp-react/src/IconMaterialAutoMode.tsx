import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoMode'

      short_name='AutoMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 17-1.55-3.45L7 12l3.45-1.575L12 7l1.575 3.425L17 12l-3.425 1.55Zm0 6q-2.7 0-5.062-1.238Q4.575 20.525 3 18.3V21H1v-6h6v2H4.55q1.275 1.875 3.237 2.938Q9.75 21 12 21q2.875 0 5.212-1.65 2.338-1.65 3.288-4.375l1.95.45q-1.125 3.4-4 5.488Q15.575 23 12 23ZM1.05 11q.175-1.675.8-3.213.625-1.537 1.725-2.837L5 6.375Q4.2 7.4 3.7 8.562 3.2 9.725 3.075 11ZM6.4 4.975 4.975 3.55q1.325-1.1 2.85-1.738Q9.35 1.175 11 1.05v2q-1.275.125-2.425.625T6.4 4.975Zm11.225 0q-1.025-.8-2.187-1.3-1.163-.5-2.438-.625v-2q1.675.15 3.212.775 1.538.625 2.838 1.725ZM20.95 11q-.125-1.275-.625-2.438-.5-1.162-1.3-2.187L20.45 4.95q1.1 1.3 1.725 2.837.625 1.538.775 3.213Z"/>
    </Icon>
  );
});

IconMaterialAutoMode.displayName = 'OnesyIconMaterialAutoMode';

export default IconMaterialAutoMode;
