import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial7kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7kFilled'

      short_name='7k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m580-450 62 79q2 3 22 11 17 0 25-15.5t-3-29.5l-56-75 57-76q11-14 3-29t-26-15q-7 0-12.5 3t-9.5 8l-62 79v-60q0-13-8.5-21.5T550-600q-13 0-21.5 8.5T520-570v180q0 13 8.5 21.5T550-360q13 0 21.5-8.5T580-390v-60Zm-214-90-43 137q-5 16 5 29.5t27 13.5q11 0 20-6.5t12-17.5l51-164q6-20-6-36t-32-16H290q-13 0-21.5 8.5T260-570q0 13 8.5 21.5T290-540h76ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterial7kFilled.displayName = 'OnesyIconMaterial7kFilled';

export default IconMaterial7kFilled;
