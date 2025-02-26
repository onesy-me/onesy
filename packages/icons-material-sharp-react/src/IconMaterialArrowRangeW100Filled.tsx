import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowRangeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRangeW100Filled'

      short_name='ArrowRange'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-316 132-479l163-163 20 19-129 129h588L645-623l20-19 163 163-163 163-21-19 130-130H185l130 130-19 19Z"/>
    </Icon>
  );
});

IconMaterialArrowRangeW100Filled.displayName = 'OnesyIconMaterialArrowRangeW100Filled';

export default IconMaterialArrowRangeW100Filled;
