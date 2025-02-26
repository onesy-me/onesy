import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartArrowNotchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrowNotchW100Filled'

      short_name='LineStartArrowNotch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M458-313 195-480l263-167-84 153h480v28H374l84 153Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrowNotchW100Filled.displayName = 'OnesyIconMaterialLineStartArrowNotchW100Filled';

export default IconMaterialLineStartArrowNotchW100Filled;
