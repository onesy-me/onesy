import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoLabelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLabelW100'

      short_name='VideoLabel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm-32-148h640v-328q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v328Z"/>
    </Icon>
  );
});

IconMaterialVideoLabelW100.displayName = 'OnesyIconMaterialVideoLabelW100';

export default IconMaterialVideoLabelW100;
