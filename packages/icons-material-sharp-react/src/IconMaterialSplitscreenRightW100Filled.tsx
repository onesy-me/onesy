import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenRightW100Filled'

      short_name='SplitscreenRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-172v-616h216v616H540Zm-336 0v-616h216v616H204Zm28-588v560h160v-560H232Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenRightW100Filled.displayName = 'OnesyIconMaterialSplitscreenRightW100Filled';

export default IconMaterialSplitscreenRightW100Filled;
