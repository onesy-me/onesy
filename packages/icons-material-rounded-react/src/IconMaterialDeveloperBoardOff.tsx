import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperBoardOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOff'

      short_name='DeveloperBoardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-57 55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM233-840h487q33 0 56.5 23.5T800-760v80h40q17 0 28.5 11.5T880-640q0 17-11.5 28.5T840-600h-40v80h40q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-40v80h40q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280h-47l-73-73v-407H313l-80-80Zm280 280-33-33v-47q0-17 11.5-28.5T520-680h80q17 0 28.5 11.5T640-640v40q0 17-11.5 28.5T600-560h-87Zm127 126-86-86h46q17 0 28.5 11.5T640-480v46Zm-233-6Zm110-118ZM240-320v-80q0-17 11.5-28.5T280-440h120q17 0 28.5 11.5T440-400v80q0 17-11.5 28.5T400-280H280q-17 0-28.5-11.5T240-320ZM128-833l73 73h-41v560h560v-41l80 80q-14 20-35 30.5T720-120H160q-33 0-56.5-23.5T80-200v-560q0-25 13.5-44.5T128-833Zm352 352 160 160v1q0 17-11.5 28.5T600-280h-80q-17 0-28.5-11.5T480-320v-161ZM281-680l159 159v1q0 17-11.5 28.5T400-480H280q-17 0-28.5-11.5T240-520v-120q0-17 11.5-28.5T280-680h1Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardOff.displayName = 'OnesyIconMaterialDeveloperBoardOff';

export default IconMaterialDeveloperBoardOff;
