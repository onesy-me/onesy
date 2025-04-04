import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEggW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EggW100Filled'

      short_name='Egg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478.78-171Q383-171 316.5-240T250-407.3q0-64.7 21-132.2 21-67.5 54.5-123t74.04-91Q440.08-789 479-789q39 0 79.71 34.93 40.72 34.93 74.03 90.39 33.31 55.45 54.29 123.56Q708-472 708-407.3q0 98.3-66.72 167.3-66.72 69-162.5 69ZM520-291q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4-60.83 0-103.42-42.58Q374-404.17 374-465q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98 0 72.21 50.9 123.1Q447.79-291 520-291Z"/>
    </Icon>
  );
});

IconMaterialEggW100Filled.displayName = 'OnesyIconMaterialEggW100Filled';

export default IconMaterialEggW100Filled;
