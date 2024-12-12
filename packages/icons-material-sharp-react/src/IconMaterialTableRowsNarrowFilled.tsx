import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableRowsNarrowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsNarrowFilled'

      short_name='TableRowsNarrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-340h720v-100H120v100Zm0-180h720v-100H120v100Zm0-180h720v-100H120v100Zm720 580v-720 720Zm-720-40h720v-100H120v100Z"/>
    </Icon>
  );
});

IconMaterialTableRowsNarrowFilled.displayName = 'OnesyIconMaterialTableRowsNarrowFilled';

export default IconMaterialTableRowsNarrowFilled;
