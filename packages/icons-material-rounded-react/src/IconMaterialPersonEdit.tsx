import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonEdit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonEdit'

      short_name='PersonEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240Zm-320 40v-72q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q37 0 73 4.5t72 14.5l-67 68q-20-3-39-5t-39-2q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32h240v80H200q-17 0-28.5-11.5T160-200Zm400 40v-50q0-16 6.5-30.5T584-266l197-197q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-340L706-143q-11 11-25.5 17t-30.5 6h-50q-17 0-28.5-11.5T560-160Zm300-223-37-37 37 37ZM620-180h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialPersonEdit.displayName = 'OnesyIconMaterialPersonEdit';

export default IconMaterialPersonEdit;
