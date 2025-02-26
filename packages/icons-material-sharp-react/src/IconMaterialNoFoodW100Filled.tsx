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
      <path d="M799-68 527-340H115q0-54 65-101t189-47q14 0 27.5.5T422-485v40L37-830l20-20L819-88l-20 20ZM115-216v-28h508v28H115Zm0 124v-28h508v28H115Zm682-130L478-542l-21-146h180v-160h28v160h180l-48 466Z"/>
    </Icon>
  );
});

IconMaterialNoFoodW100Filled.displayName = 'OnesyIconMaterialNoFoodW100Filled';

export default IconMaterialNoFoodW100Filled;
