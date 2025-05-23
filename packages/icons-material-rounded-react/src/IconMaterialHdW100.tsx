import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdW100'

      short_name='Hd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-456h112v66q0 6 4 10t10 4q6 0 10-4t4-10v-180q0-6-4-10t-10-4q-6 0-10 4t-4 10v86H300v-86q0-6-4-10t-10-4q-6 0-10 4t-4 10v180q0 6 4 10t10 4q6 0 10-4t4-10v-66Zm235 80h109q18 0 31-13t13-31v-120q0-18-13-31t-31-13H535q-6 0-10.5 4.5T520-569v178q0 6 4.5 10.5T535-376Zm13-28v-152h96q6 0 11 5t5 11v120q0 6-5 11t-11 5h-96ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialHdW100.displayName = 'OnesyIconMaterialHdW100';

export default IconMaterialHdW100;
