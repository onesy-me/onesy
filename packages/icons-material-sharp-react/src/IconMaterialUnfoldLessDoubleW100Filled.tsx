import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnfoldLessDoubleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessDoubleW100Filled'

      short_name='UnfoldLessDouble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m354-74-20-20 147-146L627-94l-20 20-126-126L354-74Zm0-200-20-20 147-146 146 146-20 20-126-126-127 126Zm126-246L334-666l20-21 126 126 127-126 20 20-147 147Zm0-200L334-866l20-21 126 126 127-126 20 20-147 147Z"/>
    </Icon>
  );
});

IconMaterialUnfoldLessDoubleW100Filled.displayName = 'OnesyIconMaterialUnfoldLessDoubleW100Filled';

export default IconMaterialUnfoldLessDoubleW100Filled;
