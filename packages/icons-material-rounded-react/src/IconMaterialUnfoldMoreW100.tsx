import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnfoldMoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreW100'

      short_name='UnfoldMore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-198 116-116q4-4 9.5-4.5T616-314q5 5 5 10t-5 10L501-179q-5 5-10 7t-11 2q-6 0-11-2t-10-7L344-294q-4-4-4.5-9.5T344-314q5-5 10-5t10 5l116 116Zm0-564L364-646q-4 4-9.5 4.5T344-646q-5-5-5-10t5-10l115-115q5-5 10-7t11-2q6 0 11 2t10 7l115 115q4 4 4.5 9.5T616-646q-5 5-10 5t-10-5L480-762Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreW100.displayName = 'OnesyIconMaterialUnfoldMoreW100';

export default IconMaterialUnfoldMoreW100;
