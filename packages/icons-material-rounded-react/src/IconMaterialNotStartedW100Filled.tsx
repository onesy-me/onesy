import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotStartedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotStartedW100Filled'

      short_name='NotStarted'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380.04-369q5.96 0 9.96-4.02 4-4.03 4-9.98v-194q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v194q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM521-392l104-69q10-6.8 10-18.9 0-12.1-10-19.1l-104-69q-11-8-23-1.44-12 6.55-12 20.44v138q0 13.89 12 20.44 12 6.56 23-1.44Zm-40.83 260q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialNotStartedW100Filled.displayName = 'OnesyIconMaterialNotStartedW100Filled';

export default IconMaterialNotStartedW100Filled;
