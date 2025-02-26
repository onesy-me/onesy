import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatClear = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatClear'

      short_name='FormatClear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m528-546-93-93-121-121h486v120H568l-40 94ZM792-56 460-388l-80 188H249l119-280L56-792l56-56 736 736-56 56Z"/>
    </Icon>
  );
});

IconMaterialFormatClear.displayName = 'OnesyIconMaterialFormatClear';

export default IconMaterialFormatClear;
