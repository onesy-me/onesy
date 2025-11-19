import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileScreensaver = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileScreensaver'

      short_name='MobileScreensaver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm340-240q6 0 9-5.5t-1-10.5l-85-113q-3-4-8-4t-8 4l-67 89-47-63q-3-4-8-4t-8 4l-65 87q-4 5-1 10.5t9 5.5h280Zm-20-200q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM280-120v-720 720Z"/>
    </Icon>
  );
});

IconMaterialMobileScreensaver.displayName = 'OnesyIconMaterialMobileScreensaver';

export default IconMaterialMobileScreensaver;
