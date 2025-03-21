import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperBoardOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOffFilled'

      short_name='DeveloperBoardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M793-280 640-434v-46q0-17-11.5-28.5T600-520h-46l-41-40h87q17 0 28.5-11.5T640-600v-40q0-17-11.5-28.5T600-680h-80q-17 0-28.5 11.5T480-640v47L233-840h487q33 0 56.5 23.5T800-760v80h40q17 0 28.5 11.5T880-640q0 17-11.5 28.5T840-600h-40v80h40q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-40v80h40q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280h-47Zm-513 0h120q17 0 28.5-11.5T440-320v-80q0-17-11.5-28.5T400-440H280q-17 0-28.5 11.5T240-400v80q0 17 11.5 28.5T280-280ZM128-833l672 672q-14 20-35 30.5T720-120H160q-33 0-56.5-23.5T80-200v-560q0-25 13.5-44.5T128-833Zm352 352v161q0 17 11.5 28.5T520-280h80q17 0 28.5-11.5T640-320v-1L480-481ZM281-680h-1q-17 0-28.5 11.5T240-640v120q0 17 11.5 28.5T280-480h120q17 0 28.5-11.5T440-520v-1L281-680ZM791-57 55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardOffFilled.displayName = 'OnesyIconMaterialDeveloperBoardOffFilled';

export default IconMaterialDeveloperBoardOffFilled;
