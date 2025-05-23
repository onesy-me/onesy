import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalAtm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtm'

      short_name='LocalAtm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-400H400q-17 0-28.5 11.5T360-360q0 17 11.5 28.5T400-320h40q0 17 11.5 28.5T480-280q17 0 28.5-11.5T520-320h40q17 0 28.5-11.5T600-360v-120q0-17-11.5-28.5T560-520H440v-40h120q17 0 28.5-11.5T600-600q0-17-11.5-28.5T560-640h-40q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640h-40q-17 0-28.5 11.5T360-600v120q0 17 11.5 28.5T400-440h120v40ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialLocalAtm.displayName = 'OnesyIconMaterialLocalAtm';

export default IconMaterialLocalAtm;
