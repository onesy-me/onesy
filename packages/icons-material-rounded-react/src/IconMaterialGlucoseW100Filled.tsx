import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlucoseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlucoseW100Filled'

      short_name='Glucose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M602-132q-28.99 0-55.49-12Q520-156 500-179L307-404q-8-10-7.5-22.5T311-447l1-1q15.14-11.47 34.07-12.24Q365-461 381-450l91 58v-408q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v334h95v-204q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v204h95v-154q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v154h95v-74q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v274q0 56-39.66 95-39.65 39-95.34 39H602ZM180.41-586Q132-586 99-618.5T66-698q0-29 11-49t59-74l21-24q9-11 22.5-11t22.5 11l21 24q48 55 59.5 74.5T294-698q0 46.26-33 79.13T180.41-586Z"/>
    </Icon>
  );
});

IconMaterialGlucoseW100Filled.displayName = 'OnesyIconMaterialGlucoseW100Filled';

export default IconMaterialGlucoseW100Filled;
