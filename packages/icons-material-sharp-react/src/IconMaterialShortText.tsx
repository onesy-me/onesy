import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShortText = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortText'

      short_name='ShortText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-360v-80h400v80H160Zm0-160v-80h640v80H160Z"/>
    </Icon>
  );
});

IconMaterialShortText.displayName = 'OnesyIconMaterialShortText';

export default IconMaterialShortText;
