import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplayCircleFilledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplayCircleFilledFilled'

      short_name='ReplayCircleFilled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.5q2.5 0 4.25-1.75T18 12.5q0-2.525-1.812-4.262Q14.375 6.5 11.8 6.5l1.6-1.6L12 3.5l-4 4 4 4 1.4-1.4-1.55-1.6q1.725 0 2.938 1.162Q16 10.825 16 12.5q0 1.65-1.175 2.825Q13.65 16.5 12 16.5q-1.65 0-2.825-1.175Q8 14.15 8 12.5H6q0 2.5 1.75 4.25T12 18.5Zm0 3.5q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialReplayCircleFilledFilled.displayName = 'OnesyIconMaterialReplayCircleFilledFilled';

export default IconMaterialReplayCircleFilledFilled;
