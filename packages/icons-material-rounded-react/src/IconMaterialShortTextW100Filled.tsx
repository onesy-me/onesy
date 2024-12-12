import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShortTextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortTextW100Filled'

      short_name='ShortText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-386q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h268q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H226Zm0-160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Z"/>
    </Icon>
  );
});

IconMaterialShortTextW100Filled.displayName = 'OnesyIconMaterialShortTextW100Filled';

export default IconMaterialShortTextW100Filled;
