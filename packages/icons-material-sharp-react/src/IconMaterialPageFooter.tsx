import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageFooter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageFooter'

      short_name='PageFooter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h720v80H120Zm0-160v-560h720v560H120Zm80-80h560v-400H200v400Zm0 0v-400 400Z"/>
    </Icon>
  );
});

IconMaterialPageFooter.displayName = 'OnesyIconMaterialPageFooter';

export default IconMaterialPageFooter;
