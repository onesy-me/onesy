import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeakerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerW100'

      short_name='Speaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M708-132H252v-696h456v696Zm-28-28v-640H280v640h400ZM480.18-620q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5ZM480-228q55 0 93.5-38.5T612-360q0-55-38.5-93.5T480-492q-55 0-93.5 38.5T348-360q0 55 38.5 93.5T480-228Zm-.07-28q-42.93 0-73.43-30.57-30.5-30.57-30.5-73.5t30.57-73.43q30.57-30.5 73.5-30.5t73.43 30.57q30.5 30.57 30.5 73.5t-30.57 73.43q-30.57 30.5-73.5 30.5ZM280-800v640-640Z"/>
    </Icon>
  );
});

IconMaterialSpeakerW100.displayName = 'OnesyIconMaterialSpeakerW100';

export default IconMaterialSpeakerW100;
