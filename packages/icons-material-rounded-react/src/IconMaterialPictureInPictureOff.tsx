import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureOff'

      short_name='PictureInPictureOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-440q25 0 42.5-17.5T760-500v-120q0-25-17.5-42.5T700-680H480q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600h200v80h-40q-17 0-28.5 11.5T600-480q0 17 12 28.5t29 11.5h59Zm140 200q-15 0-27.5-10.5T800-281v-439H361q-20 0-30-12.5T321-760q0-15 10-27.5t30-12.5h439q33 0 56.5 23.5T880-720v440q0 20-12.5 30T840-240ZM577-497Zm-194 34ZM790-57 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80h-80v480h446L54-792q-12-12-12-28.5T54-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T790-57Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureOff.displayName = 'OnesyIconMaterialPictureInPictureOff';

export default IconMaterialPictureInPictureOff;
