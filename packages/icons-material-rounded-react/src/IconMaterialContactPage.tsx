import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactPage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPage'

      short_name='ContactPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44v23ZM720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80Zm0-80v-446L526-800H240v640h480Zm-480 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialContactPage.displayName = 'OnesyIconMaterialContactPage';

export default IconMaterialContactPage;
