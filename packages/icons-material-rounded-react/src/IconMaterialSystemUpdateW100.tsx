import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSystemUpdateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateW100'

      short_name='SystemUpdate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-94v34q0 12 10 22t22 10h336q12 0 22-10t10-22v-34H280Zm0-28h400v-532H280v532Zm186-196v-180q0-6 4-10t10-4q6 0 10 4t4 10v180l80-80q4-4 9.5-4.5T594-490q5 5 5 10t-5 10l-93 93q-9 9-21 9t-21-9l-93-93q-4-4-4.5-9.5T366-490q5-5 10-5t10 5l80 80ZM280-774h400v-34q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v34Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateW100.displayName = 'OnesyIconMaterialSystemUpdateW100';

export default IconMaterialSystemUpdateW100;
