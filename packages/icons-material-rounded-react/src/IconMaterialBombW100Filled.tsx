import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBombW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BombW100Filled'

      short_name='Bomb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M649.78-659q-1.78 0-3.48-.36t-3.4-1.44L631-668q-24-14-51-7t-40 31l-4 8 25 14q17 9 21.5 27t-4.5 35l-24 42q23 38 39 78.5t16 85.5q0 102-72.26 172-72.27 70-175.5 70Q258-112 185-184.68 112-257.35 112-360q0-105 75.5-176.5T369-608q8 0 16.5.5T402-606l23-41q9-17 27-21.5t35 4.5l25 14 5-8q20-34 57-44t71 10l11.86 7.12Q660-683 662-679.77q2 3.24 2 6.98 0 5.79-4.09 9.79-4.09 4-10.13 4ZM748-628.04q0-5.96 4.03-9.96 4.02-4 9.97-4h40q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-40q-5.95 0-9.97-4.04-4.03-4.03-4.03-10ZM599.96-788q-5.96 0-9.96-4.03-4-4.02-4-9.97v-40q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v40q0 5.95-4.04 9.97-4.03 4.03-10 4.03ZM738-758q-4-4-4-9t4-9l29-30q4-4 10-4.5t10 4q4 4.5 3.5 10.5t-4.5 10l-29 29q-4 4-9.5 3.5T738-758Z"/>
    </Icon>
  );
});

IconMaterialBombW100Filled.displayName = 'OnesyIconMaterialBombW100Filled';

export default IconMaterialBombW100Filled;
