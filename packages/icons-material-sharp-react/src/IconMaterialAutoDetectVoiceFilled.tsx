import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoDetectVoiceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDetectVoiceFilled'

      short_name='AutoDetectVoice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5 10-.95-2.05L2 7l2.05-.95L5 4l.95 2.05L8 7l-2.05.95Zm13-3-.625-1.375L16 5l1.375-.625L18 3l.625 1.375L20 5l-1.375.625Zm2 4-.625-1.375L18 9l1.375-.625L20 7l.625 1.375L22 9l-1.375.625Zm-8 4q-1.25 0-2.125-.875T9 12V6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6v6q0 1.25-.875 2.125T12 15Zm-1 7v-3.075q-2.6-.35-4.3-2.325Q5 14.625 5 12h2q0 2.075 1.463 3.537Q9.925 17 12 17t3.538-1.463Q17 14.075 17 12h2q0 2.625-1.7 4.6-1.7 1.975-4.3 2.325V22Z"/>
    </Icon>
  );
});

IconMaterialAutoDetectVoiceFilled.displayName = 'OnesyIconMaterialAutoDetectVoiceFilled';

export default IconMaterialAutoDetectVoiceFilled;
