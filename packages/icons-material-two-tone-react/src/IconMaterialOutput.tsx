import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutput = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Output'

      short_name='Output'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="17,17 22,12 17,7 15.59,8.41 18.17,11 9,11 9,13 18.17,13 15.59,15.59"/><path d="M19,19H5V5h14v2h2V5c0-1.1-0.89-2-2-2H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.11,0,2-0.9,2-2v-2h-2V19z"/></g></g>
    </Icon>
  );
});

IconMaterialOutput.displayName = 'OnesyIconMaterialOutput';

export default IconMaterialOutput;
