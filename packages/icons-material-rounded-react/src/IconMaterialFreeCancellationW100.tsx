import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFreeCancellationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FreeCancellationW100'

      short_name='FreeCancellation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m641-149 160-160q4-4 10-4.5t10 4.5q4 4 4 10t-4 10L663-131q-9 9-21 9t-21-9l-75-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l75 76ZM360-381l-55 55q-4 4-9 3.5t-9-4.5q-4-4-4-9.5t4-9.5l54-54-55-55q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l54 55 55-55q4-4 9.5-4t9.5 4q4 4 4 9.5t-4 9.5l-55 55 55 55q4 4 4 9t-4 9q-4 4-9.5 4t-9.5-4l-55-54ZM232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-76q0-7 4.5-11.5T328-840q7 0 11.5 4.5T344-824v76h276v-78q0-6 4-10t10-4q6 0 10 4t4 10v78h80q26 0 43 17t17 43v227q0 6-4 9.5t-10 3.5q-6 0-10-4t-4-10v-66H200v336q0 12 10 22t22 10h180q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm-32-424h560v-132q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v132Zm0 0v-164 164Z"/>
    </Icon>
  );
});

IconMaterialFreeCancellationW100.displayName = 'OnesyIconMaterialFreeCancellationW100';

export default IconMaterialFreeCancellationW100;
