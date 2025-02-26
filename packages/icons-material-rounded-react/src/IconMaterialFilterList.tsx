import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterList = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterList'

      short_name='FilterList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240q-17 0-28.5-11.5T400-280q0-17 11.5-28.5T440-320h80q17 0 28.5 11.5T560-280q0 17-11.5 28.5T520-240h-80ZM280-440q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520h400q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440H280ZM160-640q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/>
    </Icon>
  );
});

IconMaterialFilterList.displayName = 'OnesyIconMaterialFilterList';

export default IconMaterialFilterList;
