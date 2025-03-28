import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeakerNotesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesW100'

      short_name='SpeakerNotes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M288-424q11 0 19.5-8.5T316-452q0-11-8.5-19.5T288-480q-11 0-19.5 8.5T260-452q0 11 8.5 19.5T288-424Zm0-108q11 0 19.5-8.5T316-560q0-11-8.5-19.5T288-588q-11 0-19.5 8.5T260-560q0 11 8.5 19.5T288-532Zm0-108q11 0 19.5-8.5T316-668q0-11-8.5-19.5T288-696q-11 0-19.5 8.5T260-668q0 11 8.5 19.5T288-640Zm138 202h134q6 0 10-4t4-10q0-6-4-10t-10-4H426q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-108h254q6 0 10-4t4-10q0-6-4-10t-10-4H426q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-108h254q6 0 10-4t4-10q0-6-4-10t-10-4H426q-6 0-10 4t-4 10q0 6 4 10t10 4ZM244-292l-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm-12-28h536q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesW100.displayName = 'OnesyIconMaterialSpeakerNotesW100';

export default IconMaterialSpeakerNotesW100;
