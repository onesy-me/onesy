import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChessW100Filled'

      short_name='Chess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M241.66-172q-12.66 0-21.16-8.63-8.5-8.62-8.5-21.37v-43q0-24.75 17.63-42.38Q247.25-305 272-305h40l29-201h-75q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h428q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-75l29 201h39.76q25.24 0 42.74 17.62Q748-269.75 748-245v43q0 12.75-8.56 21.37-8.57 8.63-21.22 8.63H241.66ZM358-562q-10.5 0-18.75-6.5T329-586l-34-152q-2-8 1-13.5t8-10.5q5-5 11.5-6t14.5 2q12 4 24.24 5.5Q366.47-759 380-759q25 0 46.5-5t38.5-15q4-2 7.75-3t7.5-1q3.75 0 7.25 1t7.5 3q17 10 38.51 15 21.5 5 45.49 5 14 0 25.5-1.5t25.64-6.17Q638-769 645-768.5q7 .5 12 5.5t8 11q3 6 1 14l-35 153q-2 11-10.25 17T602-562H358Z"/>
    </Icon>
  );
});

IconMaterialChessW100Filled.displayName = 'OnesyIconMaterialChessW100Filled';

export default IconMaterialChessW100Filled;
