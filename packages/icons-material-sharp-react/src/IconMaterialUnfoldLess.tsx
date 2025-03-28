import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnfoldLess = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLess'

      short_name='UnfoldLess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m356-160-56-56 180-180 180 180-56 56-124-124-124 124Zm124-404L300-744l56-56 124 124 124-124 56 56-180 180Z"/>
    </Icon>
  );
});

IconMaterialUnfoldLess.displayName = 'OnesyIconMaterialUnfoldLess';

export default IconMaterialUnfoldLess;
