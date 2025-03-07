import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldWithHouseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseFilled'

      short_name='ShieldWithHouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-320q0-17 11.5-28.5T440-360h80q17 0 28.5 11.5T560-320v184q0 8 7 13t15 1q68-38 117-97.5T772-353L480-579 188-353q24 73 72.5 132T376-124q8 5 16 0t8-14v-182ZM160-705v189q0 18 1.5 40t5.5 39l264-205q22-17 49-17t49 17l264 205q4-17 5.5-39t1.5-40v-189q0-25-14.5-45T748-779l-240-90q-14-5-28-5t-28 5l-240 90q-23 9-37.5 29T160-705Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHouseFilled.displayName = 'OnesyIconMaterialShieldWithHouseFilled';

export default IconMaterialShieldWithHouseFilled;
