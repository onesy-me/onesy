import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoLibraryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibraryW100Filled'

      short_name='VideoLibrary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M636-541q11-7 11-19t-11-19l-141-91q-11-8-23-1.5T460-651v182q0 14 12 20.5t23-1.5l141-91ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Z"/>
    </Icon>
  );
});

IconMaterialVideoLibraryW100Filled.displayName = 'OnesyIconMaterialVideoLibraryW100Filled';

export default IconMaterialVideoLibraryW100Filled;
