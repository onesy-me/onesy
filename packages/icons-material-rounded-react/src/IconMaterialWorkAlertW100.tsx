import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkAlertW100'

      short_name='WorkAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-150q8 0 13-5t5-13q0-8-5-13t-13-5q-8 0-13 5t-5 13q0 8 5 13t13 5Zm0-72q6 0 10-4t4-10v-80q0-6-4-10t-10-4q-6 0-10 4t-4 10v80q0 6 4 10t10 4Zm-560-10v32-440 408Zm32 60q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h180v-48q0-26 17-43t43-17h96q26 0 43 17t17 43v48h180q26 0 43 17t17 43v147q0 6-4 9.5t-10 3.5q-6 0-10-4t-4-10v-146q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v376q0 14 9 23t23 9h289q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm208-496h160v-48q0-14-9-23t-23-9h-96q-14 0-23 9t-9 23v48ZM720-92q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-92Z"/>
    </Icon>
  );
});

IconMaterialWorkAlertW100.displayName = 'OnesyIconMaterialWorkAlertW100';

export default IconMaterialWorkAlertW100;
