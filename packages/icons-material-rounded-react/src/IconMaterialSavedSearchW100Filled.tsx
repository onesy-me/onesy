import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSavedSearchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavedSearchW100Filled'

      short_name='SavedSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m382-542-32 24q-5 3-9 0t-2-8l11-38-35-29q-5-3-3-8t7-5h43l13-40q2-5 7-5t7 5l13 40h43q5 0 7 5t-3 8l-35 29 11 38q2 5-2 8t-9 0l-32-24Zm0 182q-92 0-156-64t-64-156q0-92 64-156t156-64q92 0 156 64t64 156q0 41-15 80t-39 66l240 240q4 4 4.5 9.5T788-174q-5 5-10 5t-10-5L528-414q-30 26-69 40t-77 14Zm0-28q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Z"/>
    </Icon>
  );
});

IconMaterialSavedSearchW100Filled.displayName = 'OnesyIconMaterialSavedSearchW100Filled';

export default IconMaterialSavedSearchW100Filled;
