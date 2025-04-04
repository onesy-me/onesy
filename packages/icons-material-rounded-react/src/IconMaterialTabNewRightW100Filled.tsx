import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabNewRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabNewRightW100Filled'

      short_name='TabNewRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M829-186H640q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h189l-79-81q-4-4-3.5-9.5t4.5-9.67q3.67-3.83 9.33-3.83 5.67 0 9.67 4l92 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 3.5t-9.67-4.67Q746-91 746-96t4-9l79-81ZM466-466v146q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-146h146q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H494v-146q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v146H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h146ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v278q0 11-8.5 19t-19.5 7q-46 0-86.5 17.5T602-358q-31 31-48.5 71T536-200q0 11-7.5 19.5T510-172H232Z"/>
    </Icon>
  );
});

IconMaterialTabNewRightW100Filled.displayName = 'OnesyIconMaterialTabNewRightW100Filled';

export default IconMaterialTabNewRightW100Filled;
