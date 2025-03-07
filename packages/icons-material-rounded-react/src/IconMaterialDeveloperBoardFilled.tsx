import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperBoardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardFilled'

      short_name='DeveloperBoard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v80h40q17 0 28.5 11.5T880-640q0 17-11.5 28.5T840-600h-40v80h40q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-40v80h40q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280h-40v80q0 33-23.5 56.5T720-120H160Zm120-160h120q17 0 28.5-11.5T440-320v-80q0-17-11.5-28.5T400-440H280q-17 0-28.5 11.5T240-400v80q0 17 11.5 28.5T280-280Zm240-280h80q17 0 28.5-11.5T640-600v-40q0-17-11.5-28.5T600-680h-80q-17 0-28.5 11.5T480-640v40q0 17 11.5 28.5T520-560Zm-240 80h120q17 0 28.5-11.5T440-520v-120q0-17-11.5-28.5T400-680H280q-17 0-28.5 11.5T240-640v120q0 17 11.5 28.5T280-480Zm240 200h80q17 0 28.5-11.5T640-320v-160q0-17-11.5-28.5T600-520h-80q-17 0-28.5 11.5T480-480v160q0 17 11.5 28.5T520-280Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardFilled.displayName = 'OnesyIconMaterialDeveloperBoardFilled';

export default IconMaterialDeveloperBoardFilled;
