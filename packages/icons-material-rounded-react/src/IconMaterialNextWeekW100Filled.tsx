import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNextWeekW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextWeekW100Filled'

      short_name='NextWeek'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h180v-48q0-26 17-43t43-17h96q26 0 43 17t17 43v48h180q26 0 43 17t17 43v376q0 26-17 43t-43 17H192Zm208-496h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48Zm124 248-94 94q-4 4-4.5 9.5T430-306q5 5 10 5t10-5l93-93q9-9 9-21t-9-21l-93-93q-4-4-9.5-4.5T430-534q-5 5-5 10t5 10l94 94Z"/>
    </Icon>
  );
});

IconMaterialNextWeekW100Filled.displayName = 'OnesyIconMaterialNextWeekW100Filled';

export default IconMaterialNextWeekW100Filled;
