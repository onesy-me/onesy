import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTerminalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TerminalW100'

      short_name='Terminal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-368H160v368q0 12 10 22t22 10Zm192-200-94-94q-4-4-4.5-10t4.5-10q4-4 10-3.5t10 4.5l92 92q9 9 9 21t-9 21l-93 93q-4 4-9.5 3.5T290-327q-4-4-4-9t4-9l94-95Zm136 134q-6 0-10-4t-4-10q0-6 4-10t10-4h160q6 0 10 4t4 10q0 6-4 10t-10 4H520Z"/>
    </Icon>
  );
});

IconMaterialTerminalW100.displayName = 'OnesyIconMaterialTerminalW100';

export default IconMaterialTerminalW100;
