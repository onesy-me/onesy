import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoFoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodW100Filled'

      short_name='NoFood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M789-78 527-340H153q-14.25 0-23.62-11.5Q120-363 124-377q11-21 32-41t52-35.5q31-15.5 71.5-25T369-488q14 0 27.5.5T422-485v40L47-820q-4-4-4.5-9.5T47-840q5-5 10-5t10 5L809-98q4 4 4.5 9.5T809-78q-5 5-10 5t-10-5ZM129-216q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h480q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H129Zm0 124q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h480q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H129Zm655-168q-8 3-16.52 1.46-8.51-1.54-15.48-8.46L492-528q-7.14-7.27-11.07-15.64Q477-552 475-562l-13-92q-2-13.6 7.08-23.8Q478.15-688 492-688h145v-146q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v146h147q13.5 0 22.75 9.75T842-655l-38 370q-1 10-6.5 16t-13.5 9Z"/>
    </Icon>
  );
});

IconMaterialNoFoodW100Filled.displayName = 'OnesyIconMaterialNoFoodW100Filled';

export default IconMaterialNoFoodW100Filled;
