import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSearchCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchCheckW100'

      short_name='SearchCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m357-550 91-90q4-4 9.5-4t9.5 4q5 4 4.5 10t-4.5 10l-88 88q-9 9-21 8.5t-21-8.5l-44-42q-5-4-5-9.5t5-10.5q5-5 10-5t10 5l44 44Zm25 190q-92 0-156-64t-64-156q0-92 64-156t156-64q92 0 156 64t64 156q0 41-15 80t-39 66l240 240q4 4 4.5 9.5T788-174q-5 5-10 5t-10-5L528-414q-30 26-69 40t-77 14Zm0-28q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Z"/>
    </Icon>
  );
});

IconMaterialSearchCheckW100.displayName = 'OnesyIconMaterialSearchCheckW100';

export default IconMaterialSearchCheckW100;
