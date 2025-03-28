import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMacroOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MacroOffW100Filled'

      short_name='MacroOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m736-321-75-75q24-11 49-17.5t50-6.5q0 25-6.5 50T736-321Zm78 190-20 20-121-121q-40 41-90.5 66.5T480-140q0-52 25.5-102.5T572-333L472-433q-27-3-47-21.5T397-499q-5 3-11.5 3.5t-12.5.5q-35 0-59.5-24T289-578q0-8 2-15.5t5-15.5L126-779l20-20 668 668ZM480-847q29 0 51.5 18t30.5 47q6-2 12.5-2.5t12.5-.5q35 0 59 24t24 59q0 17-7 33t-18 29q11 14 18 29.5t7 32.5q0 35-24 59t-59 24q-7 0-13.5-.5T560-497l-65-65q28-5 46-26.5t18-51.5q0-34-22.5-56.5T480-719q-30 0-51.5 18T402-655l-96-96q12-16 29.5-25t37.5-9q6 0 12.5.5T398-782q8-29 30.5-47t51.5-18Zm0 707q0-51-24.5-101T391-331q-40-40-90-64.5T200-420q0 51 24.5 101t64.5 90q40 40 90 64.5T480-140Z"/>
    </Icon>
  );
});

IconMaterialMacroOffW100Filled.displayName = 'OnesyIconMaterialMacroOffW100Filled';

export default IconMaterialMacroOffW100Filled;
