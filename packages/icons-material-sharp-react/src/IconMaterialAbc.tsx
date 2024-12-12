import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAbc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Abc'

      short_name='Abc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-360v-240h200v80h-60v-20h-80v120h80v-20h60v80H640Zm-260 0v-240h170l30 30v60l-30 30 30 30v60l-30 30H380Zm60-150h80v-30h-80v30Zm0 90h80v-30h-80v30Zm-320 60v-240h200v240h-60v-60h-80v60h-60Zm60-120h80v-60h-80v60Z"/>
    </Icon>
  );
});

IconMaterialAbc.displayName = 'OnesyIconMaterialAbc';

export default IconMaterialAbc;
