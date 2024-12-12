import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatSizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatSizeW100Filled'

      short_name='FormatSize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M603-719H421q-5.83 0-9.92-4.12-4.08-4.12-4.08-10t4.08-10.38q4.09-4.5 9.92-4.5h393q5.83 0 9.92 4.12 4.08 4.12 4.08 10t-4.08 10.38q-4.09 4.5-9.92 4.5H632v493q0 5.83-4.12 9.92-4.12 4.08-10 4.08t-10.38-4.38Q603-220.75 603-227v-492ZM250-524H146q-5.83 0-9.92-4.12-4.08-4.12-4.08-10t4.08-10.38q4.09-4.5 9.92-4.5h236q5.83 0 9.92 4.12 4.08 4.12 4.08 10t-4.08 10.38q-4.09 4.5-9.92 4.5H278v298q0 5.83-4.12 9.92-4.12 4.08-10 4.08t-9.88-4.08q-4-4.09-4-9.92v-298Z"/>
    </Icon>
  );
});

IconMaterialFormatSizeW100Filled.displayName = 'OnesyIconMaterialFormatSizeW100Filled';

export default IconMaterialFormatSizeW100Filled;
