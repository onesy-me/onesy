import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoubleArrowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoubleArrowFilled'

      short_name='DoubleArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M442-480 287-697q-14-20-3.5-41.5T319-760q10 0 19 4.5t14 12.5l188 263-188 263q-5 8-14 12.5t-19 4.5q-24 0-35-21.5t3-41.5l155-217Zm238 0L525-697q-14-20-3.5-41.5T557-760q10 0 19 4.5t14 12.5l188 263-188 263q-5 8-14 12.5t-19 4.5q-24 0-35-21.5t3-41.5l155-217Z"/>
    </Icon>
  );
});

IconMaterialDoubleArrowFilled.displayName = 'OnesyIconMaterialDoubleArrowFilled';

export default IconMaterialDoubleArrowFilled;
