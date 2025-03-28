import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddW100Filled'

      short_name='LibraryAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M534.04-426q5.96 0 9.96-4.02 4-4.03 4-9.98v-106h106q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H548v-106q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v106H414q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h106v106q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v430q0 12 10 22t22 10h430q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H218Z"/>
    </Icon>
  );
});

IconMaterialLibraryAddW100Filled.displayName = 'OnesyIconMaterialLibraryAddW100Filled';

export default IconMaterialLibraryAddW100Filled;
