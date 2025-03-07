import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArchiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveW100'

      short_name='Archive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-530q-6 0-10 4t-4 10v180l-80-80q-4-4-9.5-4.5T366-416q-5 5-5 10t5 10l93 93q9 9 21 9t21-9l93-93q4-4 4.5-9.5T594-416q-5-5-10-5t-10 5l-80 80v-180q0-6-4-10t-10-4ZM200-650v418q0 14 9 23t23 9h496q14 0 23-9t9-23v-418H200Zm40 478q-25 0-46.5-21.5T172-240v-409q0-11 3.5-20.5T186-687l66-79q8-11 20-16.5t26-5.5h362q14 0 26.5 5.5T707-766l67 81q7 8 10.5 18t3.5 21v406q0 25-21.5 46.5T720-172H240Zm-25-506h529l-59-71q-5-5-11.5-8t-13.5-3H299q-7 0-13.5 3t-11.5 8l-59 71Zm265 253Z"/>
    </Icon>
  );
});

IconMaterialArchiveW100.displayName = 'OnesyIconMaterialArchiveW100';

export default IconMaterialArchiveW100;
