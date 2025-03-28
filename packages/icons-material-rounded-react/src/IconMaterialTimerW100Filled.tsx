import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerW100Filled'

      short_name='Timer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M394-866q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h172q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H394Zm86.04 446q5.96 0 9.96-4.02 4-4.03 4-9.98v-172q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v172q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM480-132q-63.53 0-119.77-24Q304-180 262-222q-42-42-66-98.23-24-56.24-24-119.77 0-63.53 24-119.77Q220-616 262-658q42-42 98.23-66 56.24-24 119.77-24 57 0 110.5 21t97.5 59l30-30q4-4 9.5-4.5T738-698q5 5 5 10t-5 10l-30 30q38 44 59 97.5T788-440q0 63.53-24 119.77Q740-264 698-222q-42 42-98.23 66-56.24 24-119.77 24Z"/>
    </Icon>
  );
});

IconMaterialTimerW100Filled.displayName = 'OnesyIconMaterialTimerW100Filled';

export default IconMaterialTimerW100Filled;
