import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartArrowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrowW100Filled'

      short_name='LineStartArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M458-313 195-480l263-167v153h366v28H458v153Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrowW100Filled.displayName = 'OnesyIconMaterialLineStartArrowW100Filled';

export default IconMaterialLineStartArrowW100Filled;
