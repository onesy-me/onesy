import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableBar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBar'

      short_name='TableBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-160 80-200h120v-161q-153-5-256.5-45T80-660q0-58 117-99t283-41q167 0 283.5 41T880-660q0 54-103.5 94T520-521v161h120l80 200h-80l-48-120H368l-48 120h-80Zm240-440q97 0 183-17t126-43q-40-26-126-43t-183-17q-97 0-183 17t-126 43q40 26 126 43t183 17Zm0-60Z"/>
    </Icon>
  );
});

IconMaterialTableBar.displayName = 'OnesyIconMaterialTableBar';

export default IconMaterialTableBar;
