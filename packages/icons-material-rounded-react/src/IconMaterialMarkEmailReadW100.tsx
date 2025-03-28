import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkEmailReadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailReadW100'

      short_name='MarkEmailRead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m176-720 304 200 304-200H176Zm16 508q-24.75 0-42.37-17.63Q132-247.25 132-272v-416q0-24.75 17.63-42.38Q167.25-748 192-748h576q24.75 0 42.38 17.62Q828-712.75 828-688v230q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-240L497-497q-4 3-17 5-5 0-9-1t-8-4L160-698v426q0 14 9 23t23 9h201q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H192Zm288-243Zm0-65Zm0 30Zm134 332 218-218q4-4 9.5-4.5T852-376q5 5 5 10t-5 10L635-139q-9 9-21 9t-21-9L490-242q-4-4-4.5-9.5T490-262q5-5 10-5t10 5l104 104Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailReadW100.displayName = 'OnesyIconMaterialMarkEmailReadW100';

export default IconMaterialMarkEmailReadW100;
