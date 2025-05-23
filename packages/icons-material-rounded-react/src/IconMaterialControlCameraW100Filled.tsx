import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialControlCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlCameraW100Filled'

      short_name='ControlCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-408q-30 0-50.5-20.5T408-479q0-30 20.5-50.5T479-550q30 0 50.5 20.5T550-479q0 30-20.5 50.5T479-408Zm-42 233-90-90q-4-4-4.5-9.5T347-285q5-5 10-5t10 5l89 89q9 9 23 9t23-9l89-89q5-5 10-4.5t10 5.5q4 5 4.5 10t-4.5 10l-89 89q-9 9-20.5 13.5T479-157q-11 0-22-4.5T437-175ZM264-347l-90-89q-9-9-13-20t-4-22q0-11 4-22t13-20l91-91q4-4 9.5-4.5T285-611q5 5 5 10t-5 10l-89 89q-9 9-9 23t9 23l89 89q5 5 5 10.5t-5 10.5q-5 5-10.5 4.5T264-347Zm83-349 89-89q9-9 20-13t22-4q11 0 22 4t20 13l91 90q5 4 5 9.5t-5 10.5q-5 5-10 5t-10-5l-89-89q-9-9-23-9t-23 9l-89 89q-5 5-10 4.5t-10-4.5q-5-5-5-10.5t5-10.5Zm328 329 89-89q9-9 9-23t-9-23l-89-89q-4-4-4.5-9.5T675-611q5-5 10-5t10 5l90 90q9 9 13 20t4 22q0 11-4 22t-13 20l-90 90q-4 4-9.5 4.5T675-347q-5-5-5-10t5-10Z"/>
    </Icon>
  );
});

IconMaterialControlCameraW100Filled.displayName = 'OnesyIconMaterialControlCameraW100Filled';

export default IconMaterialControlCameraW100Filled;
