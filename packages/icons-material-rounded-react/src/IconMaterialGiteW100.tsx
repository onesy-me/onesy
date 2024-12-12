import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGiteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GiteW100'

      short_name='Gite'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-252q-25 0-42.5-17.5T132-312v-201q0-11 4-22t12-19l110-116q8-9 20-14t24-5h30v-45q0-6 4-10t10-4q6 0 10 4t4 10v45h298q12 0 24 5t20 14l110 116q8 8 12 19t4 22v201q0 25-17.5 42.5T768-252H192Zm396-28h180q14 0 23-9t9-23v-213L695-637 588-523v243Zm-28 0v-211H160v179q0 14 9 23t23 9h368Z"/>
    </Icon>
  );
});

IconMaterialGiteW100.displayName = 'OnesyIconMaterialGiteW100';

export default IconMaterialGiteW100;
