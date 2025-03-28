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
      <path d="m195-588 125-69v218q-7 1-14 1t-14 2v-173l-81 45q-11 6-23 3t-18-14l-39-68q-6-11-3-23t14-18l158-91q4-2 8-3t9-1q4 0 7 2t5 6q18 48 59 75.5t92 27.5q51 0 92-27.5t59-75.5q2-4 5-6t7-2q5 0 9 1t8 3l158 91q11 6 14 18t-3 23l-39 67q-6 11-18 14.5t-23-2.5l-81-45v308l-16 14q-2 2-5.5 3.5T640-281v-376l125 69 40-70-153-89q-24 49-70 78t-102 29q-56 0-102-29t-70-78l-154 89 41 70Zm285-52ZM180-257q-4-5-3.5-10.5t5.5-9.5l56-48q20-17 45.5-26t51.5-9q26 0 51 9t45 26l116 99q16 14 37 20.5t42 6.5q21 0 41.5-6.5T704-226l56-49q5-4 10.5-3.5t9.5 5.5q4 5 3.5 10.5T778-253l-56 48q-20 17-45 25.5t-51 8.5q-26 0-51.5-8.5T529-205l-116-99q-16-14-36.5-20.5T335-331q-21 0-42 6.5T256-304l-57 48q-5 4-10 4t-9-5Z"/>
    </Icon>
  );
});

IconMaterialLaundryW100.displayName = 'OnesyIconMaterialLaundryW100';

export default IconMaterialLaundryW100;
