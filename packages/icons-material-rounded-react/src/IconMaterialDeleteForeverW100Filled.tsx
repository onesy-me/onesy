import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeleteForeverW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteForeverW100Filled'

      short_name='DeleteForever'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-172q-25 0-42.5-17.5T252-232v-488h-26q-6 0-10-4t-4-10q0-6 4-10t10-4h134q0-11 8.5-19.5T388-776h184q11 0 19.5 8.5T600-748h134q6 0 10 4t4 10q0 6-4 10t-10 4h-26v488q0 25-17.5 42.5T648-172H312Zm168-268 94 94q4 4 9.5 4.5T594-346q5-5 5-10t-5-10l-94-94 94-94q4-4 4.5-9.5T594-574q-5-5-10-5t-10 5l-94 94-94-94q-4-4-9.5-4.5T366-574q-5 5-5 10t5 10l94 94-94 94q-4 4-4.5 9.5T366-346q5 5 10 5t10-5l94-94Z"/>
    </Icon>
  );
});

IconMaterialDeleteForeverW100Filled.displayName = 'OnesyIconMaterialDeleteForeverW100Filled';

export default IconMaterialDeleteForeverW100Filled;
