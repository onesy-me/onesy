import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterListOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListOffFilled'

      short_name='FilterListOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M763-84 83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84ZM650-440q-17 0-29-11.5T609-480q0-16 11.5-28t29.5-12h30q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440h-30ZM450-640q-17 0-29-11.5T409-680q0-16 11.5-28t29.5-12h350q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H450Zm-10 400q-17 0-28.5-11.5T400-280q0-17 11.5-28.5T440-320h80q17 0 28.5 11.5T560-280q0 17-11.5 28.5T520-240h-80ZM280-440q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520h126v80H280ZM160-640q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h46v80h-46Z"/>
    </Icon>
  );
});

IconMaterialFilterListOffFilled.displayName = 'OnesyIconMaterialFilterListOffFilled';

export default IconMaterialFilterListOffFilled;
