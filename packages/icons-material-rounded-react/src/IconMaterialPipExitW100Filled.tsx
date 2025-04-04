import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPipExitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PipExitW100Filled'

      short_name='PipExit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-222q0-5.95 4.02-9.98Q140.05-508 146-508h246q24.75 0 42.38-17.63Q452-543.25 452-568v-166q0-5.95 4.02-9.97Q460.05-748 466-748h302q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm317-348q-12.75 0-21.37 8.62Q479-542.75 479-530v144q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-126l176 176q4 4 9.5 4.5T703-336q5-5 5-10t-5-10L526-532h127q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H509Zm-347-48q-12.75 0-21.37-8.63Q132-625.25 132-638v-80q0-12.75 8.63-21.38Q149.25-748 162-748h160q12.75 0 21.38 8.62Q352-730.75 352-718v80q0 12.75-8.62 21.37Q334.75-608 322-608H162Z"/>
    </Icon>
  );
});

IconMaterialPipExitW100Filled.displayName = 'OnesyIconMaterialPipExitW100Filled';

export default IconMaterialPipExitW100Filled;
