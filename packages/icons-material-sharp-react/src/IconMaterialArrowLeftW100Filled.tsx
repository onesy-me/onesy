import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftW100Filled'

      short_name='ArrowLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M534-342 396-480l138-138v276Z"/>
    </Icon>
  );
});

IconMaterialArrowLeftW100Filled.displayName = 'OnesyIconMaterialArrowLeftW100Filled';

export default IconMaterialArrowLeftW100Filled;
