import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRheumatologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RheumatologyW100Filled'

      short_name='Rheumatology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-120v-181l-98-99q-3-4-6.5-8t-5.5-9q14 10 30 15t33 5q23 0 41-7.5t41-26.5q12-10 23-15t20-5q10 0 21 5t23 15q23 18 41 26t40 8q18 0 34.5-5.5T600-418q-2 5-5 9t-8 9l-99 99v181H332Zm-47-317q-30 0-51.5-21.5T212-510q0-15 6-28t16-23l98-99v-180h156v179l99 99q11 10 16 23.5t5 28.5q0 30-21 51.5T535-437q-20 0-31.5-7T480-462q-20-16-37-22.5t-33-6.5q-15 0-32 6.5T341-462q-12 11-24 18t-32 7Zm605 134-146-49 8-26 146 49-8 26Zm4-163H752v-28h142v28Zm3-166-145 50-9-27 146-48 8 25Z"/>
    </Icon>
  );
});

IconMaterialRheumatologyW100Filled.displayName = 'OnesyIconMaterialRheumatologyW100Filled';

export default IconMaterialRheumatologyW100Filled;
