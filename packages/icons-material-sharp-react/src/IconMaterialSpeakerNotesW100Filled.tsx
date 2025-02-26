import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeakerNotesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesW100Filled'

      short_name='SpeakerNotes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M288-424q11 0 19.5-8.5T316-452q0-11-8.5-19.5T288-480q-11 0-19.5 8.5T260-452q0 11 8.5 19.5T288-424Zm0-108q11 0 19.5-8.5T316-560q0-11-8.5-19.5T288-588q-11 0-19.5 8.5T260-560q0 11 8.5 19.5T288-532Zm0-108q11 0 19.5-8.5T316-668q0-11-8.5-19.5T288-696q-11 0-19.5 8.5T260-668q0 11 8.5 19.5T288-640Zm124 202h162v-28H412v28Zm0-108h282v-28H412v28Zm0-108h282v-28H412v28ZM132-180v-648h696v536H244L132-180Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesW100Filled.displayName = 'OnesyIconMaterialSpeakerNotesW100Filled';

export default IconMaterialSpeakerNotesW100Filled;
