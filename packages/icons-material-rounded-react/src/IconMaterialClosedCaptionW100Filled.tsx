import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClosedCaptionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionW100Filled'

      short_name='ClosedCaption'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h496q26 0 43 17t17 43v416q0 26-17 43t-43 17H232Zm88-164h80q18 0 31-13t13-31q0-5-3-8t-8-3h-6q-5 0-8 3t-3 8q0 6-5 11t-11 5h-80q-6 0-11-5t-5-11v-120q0-6 5-11t11-5h80q6 0 11 5t5 11q0 5 3 8t8 3h6q5 0 8-3t3-8q0-18-13-31t-31-13h-80q-18 0-31 13t-13 31v120q0 18 13 31t31 13Zm320-208h-80q-18 0-31 13t-13 31v120q0 18 13 31t31 13h80q18 0 31-13t13-31q0-5-3-8t-8-3h-6q-5 0-8 3t-3 8q0 6-5 11t-11 5h-80q-6 0-11-5t-5-11v-120q0-6 5-11t11-5h80q6 0 11 5t5 11q0 5 3 8t8 3h6q5 0 8-3t3-8q0-18-13-31t-31-13Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionW100Filled.displayName = 'OnesyIconMaterialClosedCaptionW100Filled';

export default IconMaterialClosedCaptionW100Filled;
