import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLunchDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LunchDiningFilled'

      short_name='LunchDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-200h800v200H80Zm400-300q-36 0-57 20t-77 20q-56 0-76-20t-56-20q-36 0-57 20t-77 20v-80q36 0 57-20t77-20q56 0 76 20t56 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 56-20t76-20q56 0 79 20t55 20v80q-56 0-75-20t-55-20q-36 0-58 20t-78 20q-56 0-77-20t-57-20ZM80-560v-40q0-115 108.5-177.5T480-840q183 0 291.5 62.5T880-600v40H80Z"/>
    </Icon>
  );
});

IconMaterialLunchDiningFilled.displayName = 'OnesyIconMaterialLunchDiningFilled';

export default IconMaterialLunchDiningFilled;
