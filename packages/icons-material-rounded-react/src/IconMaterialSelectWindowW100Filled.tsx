import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectWindowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectWindowW100Filled'

      short_name='SelectWindow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-142q-26 0-43-17t-17-43v-296q0-26 17-43t43-17h100v-200q0-26 17-43t43-17h416q26 0 43 17t17 43v296q0 26-17 43t-43 17H668v200q0 26-17 43t-43 17H192Zm0-28h416q12 0 22-10t10-22v-248H160v248q0 12 10 22t22 10Zm476-260h100q12 0 22-10t10-22v-248H320v152h288q26 0 43 17t17 43v68Z"/>
    </Icon>
  );
});

IconMaterialSelectWindowW100Filled.displayName = 'OnesyIconMaterialSelectWindowW100Filled';

export default IconMaterialSelectWindowW100Filled;
