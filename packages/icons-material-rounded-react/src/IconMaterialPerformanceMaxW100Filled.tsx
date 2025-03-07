import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPerformanceMaxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PerformanceMaxW100Filled'

      short_name='PerformanceMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm208-251 125 125q9 9 21 9t21-9l146-146q4-4 4-9.5t-4-10.5q-4-5-9.5-4.5T694-504L546-356 421-481q-9-9-21-9t-21 9L247-349q-4 4-4 10t4 10q4 4 9.5 4t9.5-4l134-134Zm124-74 16 33q2 5 7 5t7-5l14-33 34-16q5-2 4.5-7t-5.5-7l-33-15-14-33q-2-5-7-5t-7 5l-16 33-33 15q-5 2-5 7t5 7l33 16Z"/>
    </Icon>
  );
});

IconMaterialPerformanceMaxW100Filled.displayName = 'OnesyIconMaterialPerformanceMaxW100Filled';

export default IconMaterialPerformanceMaxW100Filled;
