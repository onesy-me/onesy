import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonAddDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddDisabledW100Filled'

      short_name='PersonAddDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M749-122 615-256v24H109q-13 0-21.5-8.5T79-262v-22q0-22 13.5-41.5T129-356q55-26 109.5-39T347-408q34 0 68 5t69 16L358-513q-2 1-5 1h-6q-44.55 0-76.27-31.72Q239-575.45 239-620v-6q0-3 1-5L109-762q-4-4-4.5-9.5T109-782q5-5 10-5t10 5l640 640q4 4 4.5 9.5T769-122q-5 5-10 5t-10-5Zm-16-424H627q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H761v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106Zm-286-32L305-720q10-4 20.57-6 10.56-2 21.43-2 44.55 0 76.27 31.72Q455-664.55 455-620q0 10.87-2 21.43-2 10.57-6 20.57Z"/>
    </Icon>
  );
});

IconMaterialPersonAddDisabledW100Filled.displayName = 'OnesyIconMaterialPersonAddDisabledW100Filled';

export default IconMaterialPersonAddDisabledW100Filled;
