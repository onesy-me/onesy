import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnoozeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnoozeW100Filled'

      short_name='Snooze'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m432-364 128-144 4-9.86V-530q0-6.07-3.97-10.03Q556.07-544 550-544H410q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h120L400-370l-4 9.63V-350q0 6.07 3.97 10.03Q403.93-336 410-336h140q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4H432Zm48.06 232Q416-132 360-156t-98-66q-42-42-66-97.94-24-55.95-24-120Q172-504 196-560t66-98q42-42 97.94-66 55.95-24 120-24Q544-748 600-724t98 66q42 42 66 97.94 24 55.95 24 120Q788-376 764-320t-66 98q-42 42-97.94 66-55.95 24-120 24ZM120-670q-5-5-5-10t5-10l110-110q4-4 9.5-4.5T250-800q5 5 5 10t-5 10L140-670q-4 4-9.5 4.5T120-670Zm720 0q-5 5-10 5t-10-5L710-780q-4-4-4.5-9.5T710-800q5-5 10-5t10 5l110 110q4 4 4.5 9.5T840-670Z"/>
    </Icon>
  );
});

IconMaterialSnoozeW100Filled.displayName = 'OnesyIconMaterialSnoozeW100Filled';

export default IconMaterialSnoozeW100Filled;
