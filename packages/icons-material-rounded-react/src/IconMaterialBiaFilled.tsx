import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBiaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiaFilled'

      short_name='Bia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-600h126q-3-9-4.5-19t-1.5-21q0-11 1.5-21t4.5-19H280v80Zm360 40q58 0 109-15t51-65q0-50-51-65t-109-15q-58 0-109 15t-51 65q0 50 51 65t109 15ZM160-160q-33 0-56.5-23.5T80-240v-280q0-33 23.5-56.5T160-600h40v-80q0-33 23.5-56.5T280-760h195q34-20 77-30t88-10q91 0 165.5 39.5T880-640v400q0 33-23.5 56.5T800-160H640v-160q0-17-11.5-28.5T600-360q-17 0-28.5 11.5T560-320v160h-80v-160q0-17-11.5-28.5T440-360q-17 0-28.5 11.5T400-320v160h-80v-160q0-17-11.5-28.5T280-360q-17 0-28.5 11.5T240-320v160h-80Z"/>
    </Icon>
  );
});

IconMaterialBiaFilled.displayName = 'OnesyIconMaterialBiaFilled';

export default IconMaterialBiaFilled;
