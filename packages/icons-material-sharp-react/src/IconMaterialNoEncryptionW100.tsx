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
      <path d="m748-254-28-28v-278H442l-28-28h186v-80q0-51-36.5-85.5T476-788q-51 0-87.5 35T352-668v12l-26-26q5-57 47.5-95.5T476-816q63 0 107.5 43T628-668v80h120v334Zm72 226L716-132H212v-454h50L28-820l20-20L840-48l-20 20ZM686-160 521-327q-8 8-18 12t-21 4q-23 0-38.5-15.5T428-365q0-11 4-21t12-18L286-560h-46v400h446ZM486-360Zm95-61Z"/>
    </Icon>
  );
});

IconMaterialNoEncryptionW100.displayName = 'OnesyIconMaterialNoEncryptionW100';

export default IconMaterialNoEncryptionW100;
