import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonorail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Monorail'

      short_name='Monorail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80q-17 0-28.5-11.5T240-120q0-17 11.5-28.5T280-160h160v-80q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240v80h160q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H280Zm40-800h320q66 0 113 47t47 113v380q0 58-41 99t-99 41h-60q-17 0-28.5-11.5T560-240q0-33-23.5-56.5T480-320q-33 0-56.5 23.5T400-240q0 17-11.5 28.5T360-200h-60q-58 0-99-41t-41-99v-380q0-66 47-113t113-47Zm-80 400v140q0 25 17.5 42.5T300-280h25q16-53 58.5-86.5T480-400q54 0 96.5 33.5T635-280h25q25 0 42.5-17.5T720-340v-140H240Zm0-200v120h480v-120H240Zm80-120q-22 0-40 10.5T251-760h458q-11-19-29-29.5T640-800H320Zm0 40h389-458 69Zm-80 280h480-480Z"/>
    </Icon>
  );
});

IconMaterialMonorail.displayName = 'OnesyIconMaterialMonorail';

export default IconMaterialMonorail;
