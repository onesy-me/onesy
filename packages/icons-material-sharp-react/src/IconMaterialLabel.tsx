import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Label'

      short_name='Label'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-480 642-200H120v-560h522l198 280Zm-98 0L600-680H200v400h400l142-200Zm-542 0v200-400 200Z"/>
    </Icon>
  );
});

IconMaterialLabel.displayName = 'OnesyIconMaterialLabel';

export default IconMaterialLabel;
