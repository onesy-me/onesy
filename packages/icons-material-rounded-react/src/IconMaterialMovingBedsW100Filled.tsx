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
      <path d="M204-132q-24.75 0-42.37-17.63Q144-167.25 144-192v-576q0-24.75 17.63-42.38Q179.25-828 204-828h296q24.75 0 42.38 17.62Q560-792.75 560-768v576q0 24.75-17.62 42.37Q524.75-132 500-132H204Zm-32-341q15-17 35.5-26t44.5-9h200q24 0 44.5 9t35.5 26v-295q0-14-9-23t-23-9H204q-14 0-23 9t-9 23v295Zm180-127q-23 0-38.5-15.5T298-654q0-23 15.5-38.5T352-708q23 0 38.5 15.5T406-654q0 23-15.5 38.5T352-600Zm-14 294v66q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-66h66q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4h-66v-66q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v66h-66q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h66Zm405.5-80q-4.5-4-4-10t4.5-10l60-60H654q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h150l-60-60q-4-4-4.5-10t4-10q4.5-4 10.5-4t10 4l72 73q9 9 9 21t-9 21l-73 73q-4.09 4-9.55 4-5.45 0-9.95-4Z"/>
    </Icon>
  );
});

IconMaterialMovingBedsW100Filled.displayName = 'OnesyIconMaterialMovingBedsW100Filled';

export default IconMaterialMovingBedsW100Filled;
