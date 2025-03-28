import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBodyFatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BodyFatW100Filled'

      short_name='BodyFat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-346h-40v189L99-479l649-323v188h40v28H680v-28h40v-142L514-654q27 39 43.5 83t16.5 91q0 48-16.5 92.5T514-304l205 102v-144h-39v-28h108v28Zm-300 29q26-36 42-77t16-86q0-44-15.5-85T489-641L162-480l326 163Z"/>
    </Icon>
  );
});

IconMaterialBodyFatW100Filled.displayName = 'OnesyIconMaterialBodyFatW100Filled';

export default IconMaterialBodyFatW100Filled;
