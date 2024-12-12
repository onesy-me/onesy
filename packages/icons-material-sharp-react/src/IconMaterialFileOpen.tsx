import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpen'

      short_name='FileOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h400l240 240v240h-80v-200H520v-200H240v640h360v80H160Zm718 15L760-183v89h-80v-226h226v80h-90l118 118-56 57Zm-638-95v-640 640Z"/>
    </Icon>
  );
});

IconMaterialFileOpen.displayName = 'OnesyIconMaterialFileOpen';

export default IconMaterialFileOpen;
