import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBloodtypeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodtypeFilled'

      short_name='Bloodtype'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-137 0-228.5-94T160-408q0-62 28-124t70-119q42-57 91-107t91-87q8-8 18.5-11.5T480-860q11 0 21.5 3.5T520-845q42 37 91 87t91 107q42 57 70 119t28 124q0 140-91.5 234T480-80Zm-80-160h160q17 0 28.5-11.5T600-280q0-17-11.5-28.5T560-320H400q-17 0-28.5 11.5T360-280q0 17 11.5 28.5T400-240Zm40-200v40q0 17 11.5 28.5T480-360q17 0 28.5-11.5T520-400v-40h40q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520h-40v-40q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v40h-40q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440h40Z"/>
    </Icon>
  );
});

IconMaterialBloodtypeFilled.displayName = 'OnesyIconMaterialBloodtypeFilled';

export default IconMaterialBloodtypeFilled;
