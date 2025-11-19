import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitSceneUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitSceneUpW100'

      short_name='SplitSceneUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-160q0-6 4-10t10-4q6 0 10 4t4 10v160q0 12 10 22t22 10h416q12 0 22-10t10-22v-160q0-6 4-10t10-4q6 0 10 4t4 10v160q0 26-17 43t-43 17H272ZM146-466q-6 0-10-4t-4-10q0-6 4-10t10-4h66v-274q0-26 17-43t43-17h416q26 0 43 17t17 43v274h66q6 0 10 4t4 10q0 6-4 10t-10 4H146Zm574 306H240h480Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneUpW100.displayName = 'OnesyIconMaterialSplitSceneUpW100';

export default IconMaterialSplitSceneUpW100;
