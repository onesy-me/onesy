import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableFilled'

      short_name='Table'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-480h560v-160H200v160Zm213 200h134v-120H413v120Zm0 200h134v-120H413v120ZM200-400h133v-120H200v120Zm427 0h133v-120H627v120ZM200-200h133v-120H200v120Zm427 0h133v-120H627v120Z"/>
    </Icon>
  );
});

IconMaterialTableFilled.displayName = 'OnesyIconMaterialTableFilled';

export default IconMaterialTableFilled;
