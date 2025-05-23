import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUTurnLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UTurnLeftW100Filled'

      short_name='UTurnLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M294.87-329q-5.87 0-10.87-2-5-2-10.29-7.29L182-430q-4-4-4.5-9.5T182-450q5-5 10-5t10 5l79 79v-209q0-86.67 60.74-147.33Q402.47-788 489.24-788q86.76 0 147.26 60.67Q697-666.67 697-580v394q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-394q0-75-52.5-127.5T489-760q-75 0-127.5 52.5T309-580v209l79-79q4-4 9.5-4.5T408-450q5 5 5 10t-5 10l-91.71 91.71Q311-333 305.87-331q-5.14 2-11 2Z"/>
    </Icon>
  );
});

IconMaterialUTurnLeftW100Filled.displayName = 'OnesyIconMaterialUTurnLeftW100Filled';

export default IconMaterialUTurnLeftW100Filled;
