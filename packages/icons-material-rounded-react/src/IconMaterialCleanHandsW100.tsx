import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleanHandsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleanHandsW100'

      short_name='CleanHands'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M550-123q5 2 9 2t9-2l231-71q0-21-10-29.5t-22-8.5H581q-25 0-47-2t-45-10l-72-23q-6-2-8.5-8t-.5-12q2-5 7.5-7.5t11.5-.5l68 25q20 7 44 8.5t58 1.5h10q0-21-7-33t-21-17l-229-84q-3-1-5.5-1.5t-5.5-.5h-90v184l301 89Zm-7 28-294-87q-5 23-22 36.5T189-132h-16q-25 0-42.5-17.5T113-192v-172q0-25 17.5-42.5T173-424h165q5 0 10.5 1t10.5 3l230 84q18 7 32 25.5t14 50.5h132q32 0 46.5 19.5T828-192q0 9-5 16t-14 10L578-95q-8 2-17 2.5T543-95Zm-402-97q0 14 9 23t23 9h16q14 0 23-7.5t9-24.5v-204h-48q-14 0-23 9t-9 23v172Zm452-249-28-9v-46q0-61-42.5-103.5T419-642q-57 0-95 34t-49 84h-28q10-56 49.5-97T405-670v-130h-46q-6 0-10-4t-4-10q0-6 4-10t10-4h180q19 0 35.5 4.5T608-813q5 2 9 5.5t4 8.5q0 6-4 10.5t-10 4.5q-3 0-6-1t-5-3q-13-7-27-9.5t-30-2.5H433v130q75 8 117.5 59.5T593-496v55Zm-174-63Zm315-76q-23 0-38.5-15.5T680-634q0-17 10.5-41t33.5-59q1-1 10-5 1 0 10 5 23 35 33.5 59t10.5 41q0 23-15.5 38.5T734-580Z"/>
    </Icon>
  );
});

IconMaterialCleanHandsW100.displayName = 'OnesyIconMaterialCleanHandsW100';

export default IconMaterialCleanHandsW100;
