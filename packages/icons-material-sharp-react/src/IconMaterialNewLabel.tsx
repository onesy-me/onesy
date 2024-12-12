import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewLabel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabel'

      short_name='NewLabel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200v-80h120l142-200-142-200H200v120h-80v-200h522l198 280-198 280H480Zm-9-280ZM200-160v-120H80v-80h120v-120h80v120h120v80H280v120h-80Z"/>
    </Icon>
  );
});

IconMaterialNewLabel.displayName = 'OnesyIconMaterialNewLabel';

export default IconMaterialNewLabel;
