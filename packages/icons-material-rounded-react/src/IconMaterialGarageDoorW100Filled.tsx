import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGarageDoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageDoorW100Filled'

      short_name='GarageDoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M354-436h252q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H354q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Zm0 124h252q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H354q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Zm0 124h252q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H354q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Zm-102 14v-318h-59q-10.5 0-14.25-9.5T183-518l258-221q7.7-7.7 17.85-10.85Q469-753 480-753q11 0 21.15 3.15Q511.3-746.7 519-739l258 221q8 7 4.25 16.5T767-492h-59v318q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-358H280v358q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Z"/>
    </Icon>
  );
});

IconMaterialGarageDoorW100Filled.displayName = 'OnesyIconMaterialGarageDoorW100Filled';

export default IconMaterialGarageDoorW100Filled;
