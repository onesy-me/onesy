import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSaveAsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveAsW100Filled'

      short_name='SaveAs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-572h278v-108H280v108Zm-48 400q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h401q12 0 23.5 5t19.5 13l94 94q8 8 13 19.5t5 23.5v102q0 10-7.5 16.5T763-508q-27 0-54 10t-47 30L541-348q5-8 7-16t2-18q0-29-19.5-48.5T482-450q-29 0-48.5 19.5T414-382q0 29 19.5 48.5T482-314q9 0 17.5-2t16.5-7l-86 85q-8 8-13 19.5t-5 23.5q0 10-6.5 16.5T389-172H232Zm300 50v-36q0-6 2-11t7-10l202-201q5-4 10-6t10-2q5 0 10.5 2t9.5 6l37 38q4 5 6 10t2 10q0 5-1.5 10t-6.5 10L619-101q-5 5-10 7t-11 2h-36q-13 0-21.5-8.5T532-122Zm231-162 37-38-37-38-38 38 38 38Z"/>
    </Icon>
  );
});

IconMaterialSaveAsW100Filled.displayName = 'OnesyIconMaterialSaveAsW100Filled';

export default IconMaterialSaveAsW100Filled;
