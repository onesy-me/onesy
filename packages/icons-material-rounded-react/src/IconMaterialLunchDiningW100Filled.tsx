import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLunchDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LunchDiningW100Filled'

      short_name='LunchDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-25 0-42.5-17.5T132-232v-78q0-13 8.5-21.5T162-340h636q13 0 21.5 8.5T828-310v78q0 25-17.5 42.5T768-172H192Zm288-294q-35 0-53.5 20T364-426q-44 0-62.5-20T248-466q-31 0-48.5 17T148-427q-6 1-11-3t-5-10q0-6 4.5-10t10.5-6q26-5 44.5-21.5T248-494q44 0 62.5 20t53.5 20q35 0 53.5-20t62.5-20q44 0 62.5 20t53.5 20q35 0 52.5-20t61.5-20q38 0 57.5 16.5T813-456q6 2 10.5 6t4.5 10q0 6-5 10t-11 3q-33-5-50-22t-48-17q-35 0-54.5 20T596-426q-44 0-62.5-20T480-466Zm0-322q63 0 125 8t111.5 28q49.5 20 80.5 55t31 89q0 11-8.5 19.5T800-580H160q-11 0-19.5-8.5T132-608q0-54 31-89t80.5-55Q293-772 355-780t125-8Z"/>
    </Icon>
  );
});

IconMaterialLunchDiningW100Filled.displayName = 'OnesyIconMaterialLunchDiningW100Filled';

export default IconMaterialLunchDiningW100Filled;
