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
      <path d="M648-132H312q-24.75 0-42.37-17.63Q252-167.25 252-192v-576q0-24.75 17.63-42.38Q287.25-828 312-828h336q24.75 0 42.38 17.62Q708-792.75 708-768v576q0 24.75-17.62 42.37Q672.75-132 648-132Zm0-28q14 0 23-9t9-23v-576q0-14-9-23t-23-9H312q-14 0-23 9t-9 23v576q0 14 9 23t23 9h336ZM480.18-620q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5ZM480-228q55 0 93.5-38.5T612-360q0-55-38.5-93.5T480-492q-55 0-93.5 38.5T348-360q0 55 38.5 93.5T480-228Zm-.07-28q-42.93 0-73.43-30.57-30.5-30.57-30.5-73.5t30.57-73.43q30.57-30.5 73.5-30.5t73.43 30.57q30.5 30.57 30.5 73.5t-30.57 73.43q-30.57 30.5-73.5 30.5ZM280-800v640-640Z"/>
    </Icon>
  );
});

IconMaterialSpeakerW100.displayName = 'OnesyIconMaterialSpeakerW100';

export default IconMaterialSpeakerW100;
