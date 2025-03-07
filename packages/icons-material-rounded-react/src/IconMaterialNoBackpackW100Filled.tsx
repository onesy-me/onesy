import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoBackpackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackW100Filled'

      short_name='NoBackpack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M718-366q-5 0-10.5-2t-10.5-7L350-721q-8-8-13-19.5t-5-23.5v-34q0-13 8.5-21.5T362-828h8q13 0 21.5 8.5T400-798v50h160v-50q0-13 8.5-21.5T590-828h8q13 0 21.5 8.5T628-798v51q51 5 85.5 41t34.5 87v223q0 14-9.5 22t-20.5 8ZM272-132q-25 0-43-16.5T212-189v-430q0-26 10-49.5t29-40.5l8 8v40L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5L680-240h40l28 28v22q0 24-17.5 41T688-132H272Zm230-286-28-28H334q-6 0-10 4t-4 10q0 6 4 10t10 4h168Z"/>
    </Icon>
  );
});

IconMaterialNoBackpackW100Filled.displayName = 'OnesyIconMaterialNoBackpackW100Filled';

export default IconMaterialNoBackpackW100Filled;
