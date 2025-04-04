import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabRecentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRecentW100'

      short_name='TabRecent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-92q62 0 105-43t43-105q0-62-43-105t-105-43q-62 0-105 43t-43 105q0 62 43 105t105 43Zm14-154 62 62q5 5 5 10t-5 10q-5 5-10.5 4.5T776-164l-61-61q-5-5-7-10t-2-11v-94q0-6 4-10t10-4q6 0 10 4t4 10v94Zm-542 34q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v225q0 6-4 10t-10 4q-6 0-10-4t-4-10v-147H590q-13 0-21.5-8.5T560-640v-80H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10h286q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm-32-60v-448 480-32Z"/>
    </Icon>
  );
});

IconMaterialTabRecentW100.displayName = 'OnesyIconMaterialTabRecentW100';

export default IconMaterialTabRecentW100;
