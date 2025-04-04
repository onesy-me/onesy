import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSafetyDividerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyDividerW100'

      short_name='SafetyDivider'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-226v-508h28v508h-28ZM66-346v-2q0-15 9-26.5T99-393q23-11 48.5-16t52.5-5q27 0 52.5 5t48.5 16q15 7 24 18.5t9 26.5v2H66Zm560 0v-2q0-15 9-26.5t24-18.5q23-11 48.5-16t52.5-5q27 0 52.5 5t48.5 16q15 7 24 18.5t9 26.5v2H626ZM200-506q-23 0-38.5-15.5T146-560q0-23 15.5-38.5T200-614q23 0 38.5 15.5T254-560q0 23-15.5 38.5T200-506Zm560 0q-23 0-38.5-15.5T706-560q0-23 15.5-38.5T760-614q23 0 38.5 15.5T814-560q0 23-15.5 38.5T760-506Z"/>
    </Icon>
  );
});

IconMaterialSafetyDividerW100.displayName = 'OnesyIconMaterialSafetyDividerW100';

export default IconMaterialSafetyDividerW100;
