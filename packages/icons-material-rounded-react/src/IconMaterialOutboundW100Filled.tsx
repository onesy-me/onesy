import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutboundW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboundW100Filled'

      short_name='Outbound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M586-567v113q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-130q0-12.75-8.62-21.38Q596.75-614 584-614H454q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h112L346-366q-4 3.75-4 9.37 0 5.63 4 9.63 4 5 10 4.5t10-4.5l220-220ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialOutboundW100Filled.displayName = 'OnesyIconMaterialOutboundW100Filled';

export default IconMaterialOutboundW100Filled;
