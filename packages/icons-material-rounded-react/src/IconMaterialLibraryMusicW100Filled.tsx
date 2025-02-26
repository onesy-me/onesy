import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryMusicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryMusicW100Filled'

      short_name='LibraryMusic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M484-376q31 0 52.5-21.5T558-450v-232h78q11 0 19.5-8t8.5-20q0-11-8.5-19.5T636-738h-78q-11 0-19.5 8.5T530-710v208q-9-11-20.5-16.5T484-524q-31 0-52.5 21.5T410-450q0 31 21.5 52.5T484-376Zm-158 84q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Z"/>
    </Icon>
  );
});

IconMaterialLibraryMusicW100Filled.displayName = 'OnesyIconMaterialLibraryMusicW100Filled';

export default IconMaterialLibraryMusicW100Filled;
