import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalHospitalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalHospitalFilled'

      short_name='LocalHospital'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-420v80q0 25 17.5 42.5T480-280q25 0 42.5-17.5T540-340v-80h80q25 0 42.5-17.5T680-480q0-25-17.5-42.5T620-540h-80v-80q0-25-17.5-42.5T480-680q-25 0-42.5 17.5T420-620v80h-80q-25 0-42.5 17.5T280-480q0 25 17.5 42.5T340-420h80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialLocalHospitalFilled.displayName = 'OnesyIconMaterialLocalHospitalFilled';

export default IconMaterialLocalHospitalFilled;
