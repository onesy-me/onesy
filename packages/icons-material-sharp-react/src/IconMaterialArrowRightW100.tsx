import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightW100'

      short_name='ArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-342v-276l138 138-138 138Z"/>
    </Icon>
  );
});

IconMaterialArrowRightW100.displayName = 'OnesyIconMaterialArrowRightW100';

export default IconMaterialArrowRightW100;
