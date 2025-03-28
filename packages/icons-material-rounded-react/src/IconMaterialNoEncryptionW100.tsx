import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoEncryptionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoEncryptionW100'

      short_name='NoEncryption'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-588v-80q0-50-36-85t-88-35q-49 0-81.5 29T354-680q-1 6-5 10t-10 3q-6-1-10-5t-3-10q5-57 47.5-95.5T476-816q63 0 107.5 43.5T628-668v80h60q26 0 43 17t17 43v250q0 7-4.5 10.5T734-264q-5 0-9.5-3.5T720-278v-250q0-14-9-23t-23-9H437q-7 0-10.5-4.5T423-574q0-5 3.5-9.5T437-588h163ZM272-132q-26 0-43-17t-17-43v-336q0-22 14-38t36-20L38-810q-4-4-4.5-9.5T38-830q5-5 10-5t10 5L830-58q4 4 4.5 9.5T830-38q-5 5-10 5t-10-5l-98-98q-9 3-19 3.5t-25 .5H272Zm414-28L521-327q-8 8-18 12t-21 4q-23 0-38.5-15.5T428-365q0-11 4-21t12-18L286-560h-14q-14 0-23 9t-9 23v336q0 14 9 23t23 9h414ZM486-360Zm95-61Z"/>
    </Icon>
  );
});

IconMaterialNoEncryptionW100.displayName = 'OnesyIconMaterialNoEncryptionW100';

export default IconMaterialNoEncryptionW100;
