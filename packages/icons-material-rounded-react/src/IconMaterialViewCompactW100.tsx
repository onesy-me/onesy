import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCompactW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactW100'

      short_name='ViewCompact'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M130-214v-532h700v532H130Zm28-364h140v-140H158v140Zm168 0h140v-140H326v140Zm168 0h140v-140H494v140Zm168 0h140v-140H662v140Zm0 168h140v-140H662v140Zm-168 0h140v-140H494v140Zm-168 0h140v-140H326v140Zm-28-140H158v140h140v-140Zm364 308h140v-140H662v140Zm-168 0h140v-140H494v140Zm-168 0h140v-140H326v140Zm-168 0h140v-140H158v140Z"/>
    </Icon>
  );
});

IconMaterialViewCompactW100.displayName = 'OnesyIconMaterialViewCompactW100';

export default IconMaterialViewCompactW100;
