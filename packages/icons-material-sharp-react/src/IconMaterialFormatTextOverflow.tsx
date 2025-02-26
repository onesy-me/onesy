import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatTextOverflow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextOverflow'

      short_name='FormatTextOverflow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160v-640h80v640h-80Zm498-178-56-57 45-45H320v-80h327l-45-45 56-57 142 142-142 142ZM480-160v-200h80v200h-80Zm0-440v-200h80v200h-80Z"/>
    </Icon>
  );
});

IconMaterialFormatTextOverflow.displayName = 'OnesyIconMaterialFormatTextOverflow';

export default IconMaterialFormatTextOverflow;
