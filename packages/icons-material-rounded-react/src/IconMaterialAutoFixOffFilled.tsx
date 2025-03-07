import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoFixOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFixOffFilled'

      short_name='AutoFixOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.55 6.025-.5-1.075-1.075-.5Q17.7 4.325 17.7 4t.275-.45l1.075-.5.5-1.075q.125-.275.45-.275t.45.275l.5 1.075 1.075.5q.275.125.275.45t-.275.45l-1.075.5-.5 1.075q-.125.275-.45.275t-.45-.275Zm-4 6.675L11.3 8.45l2.15-2.15q.3-.3.725-.3t.725.3l2.8 2.8q.3.3.3.725t-.3.725Zm3.55 9.2-6.4-6.35-6.15 6.15q-.3.3-.725.3t-.725-.3l-2.8-2.85q-.275-.275-.275-.7 0-.425.275-.7l6.15-6.15L2.1 4.9q-.3-.3-.3-.7 0-.4.3-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.3.3-.7.3-.4 0-.7-.3Z"/>
    </Icon>
  );
});

IconMaterialAutoFixOffFilled.displayName = 'OnesyIconMaterialAutoFixOffFilled';

export default IconMaterialAutoFixOffFilled;
