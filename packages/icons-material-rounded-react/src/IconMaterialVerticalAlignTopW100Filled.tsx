import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalAlignTopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignTopW100Filled'

      short_name='VerticalAlignTop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-760q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm253.96 588q-5.96 0-9.96-4.02-4-4.03-4-9.98v-404L346-470q-5 5-10 5t-10-5q-5-5-4.5-10.5t4.5-9.5l133-133q5-5 10.13-7 5.14-2 11-2 5.87 0 10.87 2 5 2 10 7l133 133q5 5 5 10t-5 10q-5 5-10.5 4.5T614-470L494-590v404q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignTopW100Filled.displayName = 'OnesyIconMaterialVerticalAlignTopW100Filled';

export default IconMaterialVerticalAlignTopW100Filled;
