import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatStrikethroughFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatStrikethroughFilled'

      short_name='FormatStrikethrough'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-400v-80h800v80H80Zm340-160v-120H200v-120h560v120H540v120H420Zm0 400v-160h120v160H420Z"/>
    </Icon>
  );
});

IconMaterialFormatStrikethroughFilled.displayName = 'OnesyIconMaterialFormatStrikethroughFilled';

export default IconMaterialFormatStrikethroughFilled;
