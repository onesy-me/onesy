import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResumeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResumeFilled'

      short_name='Resume'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-480h80v480h-80Zm160 0 400-240-400-240v480Z"/>
    </Icon>
  );
});

IconMaterialResumeFilled.displayName = 'OnesyIconMaterialResumeFilled';

export default IconMaterialResumeFilled;
