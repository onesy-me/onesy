import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbDownOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownOffFilled'

      short_name='ThumbDownOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 16q-.8 0-1.4-.6Q1 14.8 1 14v-2q0-.175.038-.375.037-.2.112-.375l3-7.05q.225-.5.75-.85T6 3h8q.825 0 1.413.587Q16 4.175 16 5v10.175q0 .4-.162.763-.163.362-.438.637l-5.425 5.4q-.375.35-.887.425-.513.075-.988-.175t-.688-.7q-.212-.45-.087-.925L8.45 16ZM20 3q.825 0 1.413.587Q22 4.175 22 5v9q0 .825-.587 1.412Q20.825 16 20 16q-.825 0-1.413-.588Q18 14.825 18 14V5q0-.825.587-1.413Q19.175 3 20 3Z"/>
    </Icon>
  );
});

IconMaterialThumbDownOffFilled.displayName = 'OnesyIconMaterialThumbDownOffFilled';

export default IconMaterialThumbDownOffFilled;
