import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTypeSpecimenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TypeSpecimenW100Filled'

      short_name='TypeSpecimen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M459-488h150l40 99q2 5 5.5 7t8.5 2q8 0 12.5-6t1.5-14L543-736q-1-2-2.5-3t-3.5-1h-6q-2 0-3.5 1t-2.5 3L392-399q-3 7 1.5 13t12.5 6q5 0 8-2.5t5-6.5l40-99Zm10-26 62-164h4l64 164H469ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Z"/>
    </Icon>
  );
});

IconMaterialTypeSpecimenW100Filled.displayName = 'OnesyIconMaterialTypeSpecimenW100Filled';

export default IconMaterialTypeSpecimenW100Filled;
