import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowBackIosNew = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNew'

      short_name='ArrowBackIosNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><g><polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"/></g>
    </Icon>
  );
});

IconMaterialArrowBackIosNew.displayName = 'OnesyIconMaterialArrowBackIosNew';

export default IconMaterialArrowBackIosNew;
