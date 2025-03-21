import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTempPreferencesEcoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempPreferencesEcoFilled'

      short_name='TempPreferencesEco'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-90q-39 0-74.5-12T501-135l-33 33q-11 11-28 11t-28-11q-11-11-11-28t11-28l33-33q-21-29-33-64.5T400-330q0-100 70-170.5T640-570h239v240q2 100-68.5 170T640-90ZM532-222q11 11 28 11t28-11l80-80q11-11 11-28t-11-28q-11-11-28-11t-28 11l-80 80q-11 11-11 28t11 28ZM220-450q-58 0-99-41t-41-99v-140h140q58 0 99 41t41 99v140H220Zm220-240v-100q0-42 29-71t71-29h100v100q0 42-29 71t-71 29H440Z"/>
    </Icon>
  );
});

IconMaterialTempPreferencesEcoFilled.displayName = 'OnesyIconMaterialTempPreferencesEcoFilled';

export default IconMaterialTempPreferencesEcoFilled;
