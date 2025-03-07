import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileDownloadOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadOffW100'

      short_name='FileDownloadOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m784-136-76-76H272q-26 0-43-17t-17-43v-74q0-6 4-10t10-4q6 0 10 4t4 10v74q0 12 10 22t22 10h408L529-391l-29 29q-5 5-9.5 7t-11.5 2q-7 0-10.5-2t-8.5-7l-93-92q-5-5-5-10t5-10q5-5 10-5t10 5l79 78v-58L136-784q-5-5-5-10t5-10q5-5 10-5t10 5l648 648q5 5 5 10t-5 10q-5 5-10 5t-10-5ZM594-486q5 5 5 10t-2 7q-2 2-7 1t-13-9q-2-2-2-6t2-6q2-2 7-2t10 5ZM480-748q6 0 10 4t4 10v122q0 7-4.5 10.5T480-598q-5 0-9.5-3.5T466-612v-122q0-6 4-10t10-4Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadOffW100.displayName = 'OnesyIconMaterialFileDownloadOffW100';

export default IconMaterialFileDownloadOffW100;
