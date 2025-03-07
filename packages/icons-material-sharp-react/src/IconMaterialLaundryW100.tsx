import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLaundryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaundryW100'

      short_name='Laundry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m185-550-69-119 192-110h18q17 51 58.5 81t95.5 30q54 0 95.5-30t58.5-81h18l191 111-68 118-107-59v308l-16 14q-2 2-5 3.5t-7 2.5v-376l125 69 40-70-153-89q-24 49-70 78t-102 29q-56 0-102-29t-70-78l-154 89 41 70 125-69v218q-7 1-14 1t-14 2v-173l-107 59Zm4 303-18-21 67-57q20-17 45.5-26t51.5-9q26 0 51 9t45 26l116 99q16 14 37 20.5t42 6.5q21 0 41.5-6.5T704-226l67-58 18 22-67 57q-20 17-45 25.5t-51 8.5q-26 0-51.5-8.5T529-205l-116-99q-16-14-36.5-20.5T335-331q-21 0-42 6.5T256-304l-67 57Zm291-393Z"/>
    </Icon>
  );
});

IconMaterialLaundryW100.displayName = 'OnesyIconMaterialLaundryW100';

export default IconMaterialLaundryW100;
