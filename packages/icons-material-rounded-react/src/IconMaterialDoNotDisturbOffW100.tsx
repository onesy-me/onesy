import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoNotDisturbOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOffW100'

      short_name='DoNotDisturbOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m606-466-28-28h63q5 0 9 4.04 4 4.03 4 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-34Zm-152-28v28H320q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h134Zm26 362q-72.21 0-135.72-27.4-63.51-27.41-110.49-74.39-46.98-46.98-74.39-110.49Q132-407.79 132-480q0-65 22-122t61-103L100-821q-4-4-4-9.5t4-9.5q5-5 10.5-5t9.5 5L863-98q4 4 4 9.5T862-78q-4 4-9.5 4T842-78L705-215q-46 39-103 61t-122 22Zm0-28q59 0 111-20t94-55L235-685q-35 42-55 94t-20 111q0 133 93.5 226.5T480-160Zm-20-300Zm99-99ZM312-785q38-23 80.5-33t87.5-10q69 0 133 26.5T726-726q49 49 75.5 113T828-480q0 44-10.5 85.5T787-315q-2.69 5-8.85 6.5-6.15 1.5-10.94-1.5-4.79-3-6.5-9t1.29-11q19-35.43 28.5-73.21Q800-441 800-480q0-134-93-227t-227-93q-39 0-76.79 9.5Q365.43-781 330-762q-5 3-11 2t-10-6q-4-5-3-10.5t6-8.5Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOffW100.displayName = 'OnesyIconMaterialDoNotDisturbOffW100';

export default IconMaterialDoNotDisturbOffW100;
