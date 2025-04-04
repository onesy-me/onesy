import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPunchClockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockW100Filled'

      short_name='PunchClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M228-132q-23.1 0-39.55-16.74Q172-165.49 172-189v-442q0-23.51 16.45-40.26Q204.9-688 228-688h55v-80q0-24.75 17.63-42.38Q318.25-828 343-828h275q24.75 0 42.38 17.62Q678-792.75 678-768v80h54q24 0 40 16.74 16 16.75 16 40.26v442q0 23.51-16 40.26Q756-132 732-132H228Zm83-556h339v-80q0-14-9-23t-23-9H343q-14 0-23 9t-9 23v80Zm168.29 434Q544-254 590-300t46-109.5q0-63.5-46-110T479.29-566q-64.7 0-110 46.5Q324-473 324-409.5T369.29-300q45.3 46 110 46ZM493-416v-69q0-5.2-3.86-9.1-3.85-3.9-9-3.9-5.14 0-9.14 3.9-4 3.9-4 9.1v69q0 5.57 2 10.78 2 5.22 7 10.22l37 37q4.09 4 9.55 4 5.45 0 9.45-3.86 4-3.85 4-9 0-5.14-4-9.14l-39-40Z"/>
    </Icon>
  );
});

IconMaterialPunchClockW100Filled.displayName = 'OnesyIconMaterialPunchClockW100Filled';

export default IconMaterialPunchClockW100Filled;
