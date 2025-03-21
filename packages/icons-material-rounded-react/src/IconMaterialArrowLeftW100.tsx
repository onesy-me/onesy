import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftW100'

      short_name='ArrowLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m508-368-95.7-95.7q-3.3-3.3-5.3-7.36-2-4.07-2-8.94 0-4.88 2-8.94t5.3-7.36l95.72-95.72q1.98-1.98 4.74-3.48 2.77-1.5 5.92-1.5 6.32 0 10.82 4.12 4.5 4.13 4.5 10.88v204q0 6.75-4.64 10.87-4.63 4.13-10.81 4.13-1.55 0-10.55-5Z"/>
    </Icon>
  );
});

IconMaterialArrowLeftW100.displayName = 'OnesyIconMaterialArrowLeftW100';

export default IconMaterialArrowLeftW100;
