import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialErrorCircleRoundedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorCircleRoundedFilled'

      short_name='ErrorCircleRounded'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13q.425 0 .713-.288Q13 12.425 13 12V7.975q0-.425-.287-.7Q12.425 7 12 7t-.712.287Q11 7.575 11 8v4.025q0 .425.288.7.287.275.712.275Zm0 4q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm0 5q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialErrorCircleRoundedFilled.displayName = 'OnesyIconMaterialErrorCircleRoundedFilled';

export default IconMaterialErrorCircleRoundedFilled;
