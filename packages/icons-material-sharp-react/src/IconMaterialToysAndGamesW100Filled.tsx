import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToysAndGamesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysAndGamesW100Filled'

      short_name='ToysAndGames'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-248v116H172v-116h20q11 5 22.97 7.5Q226.94-238 240-238q49.5 0 84.75-35.25T360-358q0-49.5-35.25-84.75T240-478q-10.24 0-19.62 1.5T202-472h-30v-116h214v-24q-17-17-25.5-40t-8.5-48q0-54 37-91t91-37q54 0 91 37t37 91q0 25-8.5 48T574-612v24h214v116h-30q-9-3-18.3-4.5T720-478q-49.5 0-84.75 35.25T600-358q0 49.5 35.25 84.75T720-238q13.26 0 25.13-2.5T768-248h20Z"/>
    </Icon>
  );
});

IconMaterialToysAndGamesW100Filled.displayName = 'OnesyIconMaterialToysAndGamesW100Filled';

export default IconMaterialToysAndGamesW100Filled;
