import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLaundryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaundryW100Filled'

      short_name='Laundry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-436v-173l-107 59-69-119 192-110h18q17 51 58.5 81t95.5 30q54 0 95.5-30t58.5-81h18l191 111-68 118-107-59v308l-16 14q-5 5-13 6.5t-14 1.5q-8 0-14.5-2t-11.5-6l-116-99q-31-26-70-40t-78-14q-11 0-21.5 1t-21.5 3ZM189-247l-18-21 67-57q20-17 45.5-25.5T335-359q26 0 51 8.5t45 25.5l116 99q16 14 37 20.5t42 6.5q21 0 41.5-6.5T704-226l67-58 19 22-68 57q-20 17-45 25.5t-51 8.5q-26 0-51.5-8.5T529-205l-116-99q-16-14-37-20.5t-42-6.5q-21 0-41.5 6.5T256-304l-67 57Z"/>
    </Icon>
  );
});

IconMaterialLaundryW100Filled.displayName = 'OnesyIconMaterialLaundryW100Filled';

export default IconMaterialLaundryW100Filled;
