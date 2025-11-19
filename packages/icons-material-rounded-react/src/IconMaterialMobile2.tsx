import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobile2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mobile2'

      short_name='Mobile2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm0 0v-720 720Zm200-40q17 0 28.5-11.5T520-200q0-17-11.5-28.5T480-240q-17 0-28.5 11.5T440-200q0 17 11.5 28.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialMobile2.displayName = 'OnesyIconMaterialMobile2';

export default IconMaterialMobile2;
