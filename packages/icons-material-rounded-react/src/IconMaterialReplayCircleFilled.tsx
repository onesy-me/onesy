import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplayCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplayCircleFilled'

      short_name='ReplayCircleFilled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.5q2.5 0 4.25-1.75T18 12.5q0-2.525-1.812-4.262Q14.375 6.5 11.8 6.5l.9-.9q.275-.275.275-.7 0-.425-.275-.7-.275-.275-.7-.275-.425 0-.7.275L8.7 6.8q-.15.15-.212.325-.063.175-.063.375t.063.375q.062.175.212.325l2.6 2.6q.275.275.688.287.412.013.712-.287.275-.275.288-.688Q13 9.7 12.725 9.4l-.875-.9q1.725 0 2.938 1.162Q16 10.825 16 12.5q0 1.65-1.175 2.825Q13.65 16.5 12 16.5q-1.425 0-2.512-.887Q8.4 14.725 8.1 13.375 8 13 7.725 12.75T7.1 12.5q-.475 0-.775.337-.3.338-.225.763.375 2.125 2.025 3.513Q9.775 18.5 12 18.5Zm0 3.5q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialReplayCircleFilled.displayName = 'OnesyIconMaterialReplayCircleFilled';

export default IconMaterialReplayCircleFilled;
