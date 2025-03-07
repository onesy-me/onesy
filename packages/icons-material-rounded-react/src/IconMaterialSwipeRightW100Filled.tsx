import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRightW100Filled'

      short_name='SwipeRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M796-688q-81-65-159-96t-160-31q-94 0-174.5 37.5T172-674q-5 6-11.1 10t-13.9 4q-5 0-7-5.5t2-10.5q49-77 138.5-122T477-843q83 0 162 29.5T800-722v-92q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v124q0 12.75-8.62 21.37Q810.75-660 798-660H674q-6.07 0-10.03-3.95-3.97-3.96-3.97-10 0-6.05 3.97-10.05 3.96-4 10.03-4h122ZM473-132q-19 0-35.5-7T407-160L227-339q-5.5-6-5.75-15t6.75-15q7-6 15.5-7.5t17.5.5l125 30v-334q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v294h83v-160q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v160h84v-120q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v120h83v-40q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v160q0 56-39 95t-94.8 39H473Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightW100Filled.displayName = 'OnesyIconMaterialSwipeRightW100Filled';

export default IconMaterialSwipeRightW100Filled;
