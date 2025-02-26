import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForestW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForestW100'

      short_name='Forest'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-132v-160H98l160-240h-78l180-258 120 172 120-172 180 258h-78l160 240H628v160h-56v-160H388v160h-56Zm271-188h207L650-560h76L600-740 498-594l42 62h-78l141 212Zm-453 0h420L410-560h76L360-740 234-560h76L150-320Zm0 0h160-76 252-76 160-420Zm453 0H462h78-42 228-76 160-207Zm-31 28h56-56Zm50 0Z"/>
    </Icon>
  );
});

IconMaterialForestW100.displayName = 'OnesyIconMaterialForestW100';

export default IconMaterialForestW100;
