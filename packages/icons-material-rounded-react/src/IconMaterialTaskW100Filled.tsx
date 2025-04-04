import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTaskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskW100Filled'

      short_name='Task'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v449q0 26-17 43t-43 17H272Zm300-550q0 13 8.5 21.5T602-652h118L572-800v118ZM438-339l-76-76q-2-2-4.5-3t-5-1q-2.5 0-5.5 1t-5 3q-5 5-5 10t5 10l75 75q5 5 10 7t11 2q6 0 11-2t10-7l159-159q4-4 4.5-9.5T618-499q-5-5-10-5t-10 5L438-339Z"/>
    </Icon>
  );
});

IconMaterialTaskW100Filled.displayName = 'OnesyIconMaterialTaskW100Filled';

export default IconMaterialTaskW100Filled;
