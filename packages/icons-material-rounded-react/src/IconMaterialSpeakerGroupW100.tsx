import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeakerGroupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerGroupW100'

      short_name='SpeakerGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-228h348q14 0 23-9t9-23v-548q0-14-9-23t-23-9H380q-14 0-23 9t-9 23v548q0 14 9 23t23 9Zm0 28q-26 0-43-17t-17-43v-548q0-26 17-43t43-17h348q26 0 43 17t17 43v548q0 26-17 43t-43 17H380Zm174-470q21 0 35.5-14.5T604-720q0-21-14.5-35.5T554-770q-21 0-35.5 14.5T504-720q0 21 14.5 35.5T554-670Zm0 354q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33Zm0-28q-35 0-60.5-25.5T468-430q0-35 25.5-60.5T554-516q35 0 60.5 25.5T640-430q0 35-25.5 60.5T554-344Zm20 252H272q-26 0-43-17t-17-43v-542q0-6 4-10t10-4q6 0 10 4t4 10v542q0 14 9 23t23 9h302q6 0 10 4t4 10q0 6-4 10t-10 4ZM348-840v612-612Z"/>
    </Icon>
  );
});

IconMaterialSpeakerGroupW100.displayName = 'OnesyIconMaterialSpeakerGroupW100';

export default IconMaterialSpeakerGroupW100;
