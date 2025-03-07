import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeDualW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeDualW100'

      short_name='ModeDual'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M244-176q-5 4-10.5 3.5T224-177q-31-32-51.5-70T152-330q0-43 13.5-83.5T197-492q17-35 30.5-71.5T241-638q0-38-21-69.5T170-765q-4-3-3.5-8.5t4.5-9.5q4-5 9.5-5t10.5 4q33 29 55.5 65.5T269-638q0 41-14 79t-31 75q-17 37-30.5 75T180-330q0 39 19 73t47 62q4 4 3 9.5t-5 9.5Zm151 0q-5 4-10.5 3.5T375-177q-31-32-51.5-70T303-330q0-43 13.5-83.5T348-492q17-35 30.5-71.5T392-638q0-38-21-69.5T321-765q-4-3-3.5-8.5t4.5-9.5q4-5 9.5-5t10.5 4q33 29 55.5 65.5T420-638q0 41-14 79t-31 75q-17 37-30.5 75T331-330q0 39 19 73t47 62q4 4 3 9.5t-5 9.5Zm105 56v-720q0-6 4-10t10-4q6 0 10 4t4 10v188l146-144q5-5 10-5t10 5q5 5 5 10t-5 10L528-610v116h116l166-166q5-5 10-5t10 5q4 4 4 9.5t-4 10.5L686-494h188q6 0 10 4t4 10q0 6-4 10t-10 4H686l144 146q5 5 5 10t-5 10q-5 5-10 5t-10-5L644-466H528v116l166 166q5 5 5 10t-5 10q-4 4-9.5 4t-10.5-4L528-308v188q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialModeDualW100.displayName = 'OnesyIconMaterialModeDualW100';

export default IconMaterialModeDualW100;
