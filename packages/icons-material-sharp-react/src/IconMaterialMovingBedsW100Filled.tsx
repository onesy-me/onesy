import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovingBedsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingBedsW100Filled'

      short_name='MovingBeds'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M144-132v-696h416v696H144Zm28-341q15-17 35.5-26t44.5-9h200q24 0 44.5 9t35.5 26v-327H172v327Zm180-127q-23 0-38.5-15.5T298-654q0-23 15.5-38.5T352-708q23 0 38.5 15.5T406-654q0 23-15.5 38.5T352-600Zm402 223-20-19 70-70H640v-28h164l-70-70 20-19 103 103-103 103ZM338-226h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Z"/>
    </Icon>
  );
});

IconMaterialMovingBedsW100Filled.displayName = 'OnesyIconMaterialMovingBedsW100Filled';

export default IconMaterialMovingBedsW100Filled;
