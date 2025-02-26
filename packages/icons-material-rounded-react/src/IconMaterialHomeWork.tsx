import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeWork = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWork'

      short_name='HomeWork'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M920-760v560q0 33-23.5 56.5T840-120H720q-17 0-28.5-11.5T680-160q0-17 11.5-28.5T720-200h120v-560H480v20q0 17-11.5 28.5T440-700q-17 0-28.5-11.5T400-740v-22q0-32 23-55t55-23h362q33 0 56.5 23.5T920-760ZM40-479q0-20 9-37t25-28l200-143q11-8 22.5-11.5T320-702q12 0 23.5 3.5T366-687l200 143q16 11 25 28t9 37v279q0 33-23.5 56.5T520-120h-80q-33 0-56.5-23.5T360-200v-120h-80v120q0 33-23.5 56.5T200-120h-80q-33 0-56.5-23.5T40-200v-279Zm80-1v280h80v-120q0-33 23.5-56.5T280-400h80q33 0 56.5 23.5T440-320v120h80v-280L320-622 120-480Zm527-104ZM440-200v-200H200v200-200h240v200Zm260-400h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6Zm0 160h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6Zm0 160h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialHomeWork.displayName = 'OnesyIconMaterialHomeWork';

export default IconMaterialHomeWork;
