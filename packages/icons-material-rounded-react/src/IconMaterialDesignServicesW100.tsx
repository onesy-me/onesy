import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesignServicesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesignServicesW100'

      short_name='DesignServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m368-480 93-93-90-90-37 37q-4 4-9.5 4.5T314-626q-5-5-5-10t5-10l37-37-88-88-93 93 198 198Zm309 309 93-93-88-88-37 37q-4 4-9.5 4.5T625-315q-5-5-5-10t5-10l37-37-89-89-93 93 197 197Zm10-589 73 73-73-73ZM202-172q-13 0-21.5-8.5T172-202v-71q0-6 2-11t7-10l167-167-195-196q-9-9-9-21t9-21l89-89q9-9 21-9t21 9l197 196 187-187q5-5 10-7t11-2q6 0 11 2t10 7l69 72q5 5 6.5 10t1.5 11q0 6-1.5 10.5T779-666L594-480l194 196q9 9 9 21t-9 21l-89 89q-9 9-21 9t-21-9L461-348 294-181q-5 5-10 7t-11 2h-71Zm-2-28h73l393-393-73-73-393 393v73Zm430-430-37-36 73 73-36-37Z"/>
    </Icon>
  );
});

IconMaterialDesignServicesW100.displayName = 'OnesyIconMaterialDesignServicesW100';

export default IconMaterialDesignServicesW100;
