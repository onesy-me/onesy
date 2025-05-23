import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStairsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StairsW100Filled'

      short_name='Stairs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M391-399h89q5.95 0 9.98-4.02Q494-407.05 494-413v-119h89q5.95 0 9.97-4.03Q597-540.05 597-546v-120h83q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4h-97q-5.95 0-9.97 4.03Q569-685.95 569-680v119h-89q-5.95 0-9.98 4.03Q466-552.95 466-547v119h-89q-5.95 0-9.98 4.02Q363-419.95 363-414v120h-83q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h97q5.95 0 9.98-4.02Q391-274.05 391-280v-119ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialStairsW100Filled.displayName = 'OnesyIconMaterialStairsW100Filled';

export default IconMaterialStairsW100Filled;
