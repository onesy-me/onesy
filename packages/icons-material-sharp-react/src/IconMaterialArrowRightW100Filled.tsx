import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightW100Filled'

      short_name='ArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-342v-276l138 138-138 138Z"/>
    </Icon>
  );
});

IconMaterialArrowRightW100Filled.displayName = 'OnesyIconMaterialArrowRightW100Filled';

export default IconMaterialArrowRightW100Filled;
