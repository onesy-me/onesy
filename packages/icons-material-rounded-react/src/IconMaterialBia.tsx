import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBia = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bia'

      short_name='Bia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-80q0-17 11.5-28.5T280-360q17 0 28.5 11.5T320-320v80h80v-80q0-17 11.5-28.5T440-360q17 0 28.5 11.5T480-320v80h80v-80q0-17 11.5-28.5T600-360q17 0 28.5 11.5T640-320v80h160v-277q-33 19-74.5 28t-85.5 9q-45 0-88-10t-77-30H160v280h80Zm40-360h126q-3-9-4.5-19t-1.5-21q0-11 1.5-21t4.5-19H280v80Zm360 40q58 0 109-15t51-65q0-50-51-65t-109-15q-58 0-109 15t-51 65q0 50 51 65t109 15ZM160-160q-33 0-56.5-23.5T80-240v-280q0-33 23.5-56.5T160-600h40v-80q0-33 23.5-56.5T280-760h195q34-20 77-30t88-10q91 0 165.5 39.5T880-640v400q0 33-23.5 56.5T800-160H160Zm80-80h560-640 80Z"/>
    </Icon>
  );
});

IconMaterialBia.displayName = 'OnesyIconMaterialBia';

export default IconMaterialBia;
