import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppShortcutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppShortcutW100'

      short_name='AppShortcut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-186v34q0 12 10 22t22 10h336q12 0 22-10t10-22v-34H280Zm0-588h400v-34q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v34Zm0 0v-66 66Zm0 588v66-66Zm470-280H480q-14 0-23 9t-9 23v106q0 6-4 10t-10 4q-6 0-10-4t-4-10v-106q0-25 17.5-42.5T480-494h270l-80-80q-4-4-4.5-9.5T670-594q5-5 10-5t10 5l93 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5T670-366q-5-5-5-10t5-10l80-80ZM312-92q-25 0-42.5-17.5T252-152v-656q0-25 17.5-42.5T312-868h336q25 0 42.5 17.5T708-808v110q0 6-4 10t-10 4q-6 0-10-4t-4-10v-48H280v532h400v-48q0-6 4-10t10-4q6 0 10 4t4 10v110q0 25-17.5 42.5T648-92H312Z"/>
    </Icon>
  );
});

IconMaterialAppShortcutW100.displayName = 'OnesyIconMaterialAppShortcutW100';

export default IconMaterialAppShortcutW100;
