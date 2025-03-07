import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoFoodW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodW100'

      short_name='NoFood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m797-222-25-25 43-413H461l-4-28h180v-160h28v160h180l-48 466ZM625-395ZM799-68 37-830l20-20L819-88l-20 20ZM115-216v-28h508v28H115Zm0 124v-28h508v28H115Zm307-393v28q-13-2-26-2.5t-27-.5q-93 0-148.5 27.5T150-368h389l28 28H115q0-54 65-101t189-47q14 0 27 .5t26 2.5Zm-53 117Z"/>
    </Icon>
  );
});

IconMaterialNoFoodW100.displayName = 'OnesyIconMaterialNoFoodW100';

export default IconMaterialNoFoodW100;
