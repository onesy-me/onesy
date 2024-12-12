import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackHandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHandW100Filled'

      short_name='BackHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-92q-76 0-142-37T252-232L119-453q-3-5-2.5-11t5.5-11q8-8 18.5-9t19.5 5l172 113v-382q0-5 4-9.5t10-4.5q5 0 9.5 4.5t4.5 9.5v242h115v-322q0-5 4-9.5t10-4.5q6 0 10 4.5t4 9.5v322h115v-282q0-5 4-9.5t10-4.5q6 0 10 4.5t4 9.5v282h114v-228q0-5 4-9.5t10-4.5q5 0 9.5 4.5t4.5 9.5v355q0 120-84 203.5T500-92Z"/>
    </Icon>
  );
});

IconMaterialBackHandW100Filled.displayName = 'OnesyIconMaterialBackHandW100Filled';

export default IconMaterialBackHandW100Filled;
