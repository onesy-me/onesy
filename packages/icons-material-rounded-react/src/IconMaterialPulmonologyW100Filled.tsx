import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPulmonologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PulmonologyW100Filled'

      short_name='Pulmonology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-146q-39 0-66.5-27.5T132-240v-151q0-5 1-10.5t3-10.5l91-241q13-35 41-58t64-23q38 0 66 24t28 61v67l-83 84q-6 6-6 14t6 14q6 6 14 6t14-6l95-95v-275q0-6 4-10t10-4q6 0 10 4t4 10v275l95 95q6 6 14 6t14-6q6-6 6-14t-6-14l-83-84v-67q0-37 28-61t66-24q36 0 63.5 23t40.5 58l92 241q2 5 3 10.5t1 10.5v151q0 39-28 66.5T734-146H614q-39 0-66.5-27.5T520-240v-83l16-160-56-57-58 57 18 160v83q0 39-28 66.5T346-146H226Z"/>
    </Icon>
  );
});

IconMaterialPulmonologyW100Filled.displayName = 'OnesyIconMaterialPulmonologyW100Filled';

export default IconMaterialPulmonologyW100Filled;
