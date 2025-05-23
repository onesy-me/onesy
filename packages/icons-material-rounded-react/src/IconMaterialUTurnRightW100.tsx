import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUTurnRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UTurnRightW100'

      short_name='UTurnRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M287.96-172q-5.96 0-9.96-4.02-4-4.03-4-9.98v-394q0-86.67 60.74-147.33Q395.47-788 482.24-788q86.76 0 147.26 60.67Q690-666.67 690-580v209l79-79q5-5 10-5t10 5q5 5 4.5 10.5T789-430l-91.71 91.71Q692-333 686.87-331q-5.14 2-11 2-5.87 0-10.87-2-5-2-10.29-7.29L563-430q-5-5-5-10t5-10q5-5 10.5-4.5t9.5 4.5l79 79v-209q0-75-52.5-127.5T482-760q-75 0-127.5 52.5T302-580v394q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialUTurnRightW100.displayName = 'OnesyIconMaterialUTurnRightW100';

export default IconMaterialUTurnRightW100;
