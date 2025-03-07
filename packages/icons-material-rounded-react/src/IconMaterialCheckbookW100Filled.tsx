import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckbookW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckbookW100Filled'

      short_name='Checkbook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-414 560-180q-2.07 2-4.66 3-2.58 1-5.34 1h-6q-3.2 0-5.6-2.4-2.4-2.4-2.4-5.6v-6q0-2.76 1-5.34 1-2.59 3-4.66l234-234 20 20ZM132-312v-336q0-24.75 17.63-42.38Q167.25-708 192-708h576q24.75 0 42.38 17.62Q828-672.75 828-648v17q0 19-6.5 30.5T800-573L659-432q-8 8-19.28 13-11.28 5-23.72 5H280q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h297q9.92 0 13.46 9.5Q594-367 587-360l-90 90q-8 8-19.28 13-11.28 5-23.72 5H192q-24.75 0-42.37-17.63Q132-287.25 132-312Zm148-234h160q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H280q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm536 108-20-20 29.89-29.85q4.15-4.15 9.13-4.15t8.98 4l2 2q4 4.12 4 9.06t-4.15 9.09L816-438Z"/>
    </Icon>
  );
});

IconMaterialCheckbookW100Filled.displayName = 'OnesyIconMaterialCheckbookW100Filled';

export default IconMaterialCheckbookW100Filled;
