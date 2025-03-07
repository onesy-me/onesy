import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeepPublicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepPublicW100'

      short_name='KeepPublic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-580Zm-34 208H209q-6.37 0-10.69-4.5Q194-381 194-386.67v-7.66q0-2.67 1-5.17t3-4.5l54-54v-302h-26q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h192q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H280v289q0 12.44-5 23.72T262-428l-28 28h278q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H374v175.7q0 6.3-2 11.3-2 5-7 10-2.18 2-5.09 2-2.91 0-4.91-2-5-5-7-10.22-2-5.21-2-10.78v-176Zm294-268q25 0 42.5-17.5T700-700q0-25-17.5-42.5T640-760q-25 0-42.5 17.5T580-700q0 25 17.5 42.5T640-640Zm0 120q23.42 0 44.71-8.5T723-554q7-7 7-15.5t-8-12.5q-20-9-40.31-13.5Q661.38-600 640-600t-41.69 4.5Q578-591 558-582q-8 4-8 12.5t7 15.5q17 17 38.29 25.5T640-520Zm0 28q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Z"/>
    </Icon>
  );
});

IconMaterialKeepPublicW100.displayName = 'OnesyIconMaterialKeepPublicW100';

export default IconMaterialKeepPublicW100;
