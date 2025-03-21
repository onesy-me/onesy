import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroups3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Groups3W100Filled'

      short_name='Groups3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m188-397 60-60-60-60-60 60 60 60Zm524-9 62-100 63 100H712Zm-231.65-22Q448-428 425-450.75T402-506q0-33.15 22.75-55.58Q447.5-584 480-584q33.15 0 55.58 22.32Q558-539.35 558-506.35 558-474 535.68-451q-22.33 23-55.33 23ZM52-262v-26q0-35 37.55-58.5 37.56-23.5 97.48-23.5 10.97 0 20.97 1 10 1 19 3-7 14-11 29.11t-4 32.19v42.7H52Zm240 0v-39q0-45 52.17-71t136.11-26q84.72 0 136.22 26t51.5 71v39H292Zm482-108q60.3 0 97.15 23.5Q908-323 908-288v26H748v-42.7q0-17.08-3.5-32.19T734-366q9-2 19.19-3 10.18-1 20.81-1Z"/>
    </Icon>
  );
});

IconMaterialGroups3W100Filled.displayName = 'OnesyIconMaterialGroups3W100Filled';

export default IconMaterialGroups3W100Filled;
