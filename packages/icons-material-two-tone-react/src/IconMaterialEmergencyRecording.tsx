import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyRecording = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyRecording'

      short_name='EmergencyRecording'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M4,6v12h12V6H4z M15,13.73l-1,1.73l-3-1.73V17H9v-3.27l-3,1.73l-1-1.73L8,12l-3-1.73l1-1.73l3,1.73V7h2v3.27 l3-1.73l1,1.73L12,12L15,13.73z" opacity=".3"/><path d="M18,10.48V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4.48l4,3.98v-11L18,10.48z M16,18 H4V6h12V18z M12,12l3,1.73l-1,1.73l-3-1.73V17H9v-3.27l-3,1.73l-1-1.73L8,12l-3-1.73l1-1.73l3,1.73V7h2v3.27l3-1.73l1,1.73L12,12z"/></g>
    </Icon>
  );
});

IconMaterialEmergencyRecording.displayName = 'OnesyIconMaterialEmergencyRecording';

export default IconMaterialEmergencyRecording;
