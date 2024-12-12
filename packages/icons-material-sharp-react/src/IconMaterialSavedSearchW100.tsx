import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSavedSearchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavedSearchW100'

      short_name='SavedSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M778-164 528-414q-30 26-69 40t-77 14q-92 0-156-64t-64-156q0-92 64-156t156-64q92 0 156 64t64 156q0 41-15 80t-39 66l250 250-20 20ZM382-388q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Zm-50-116 18-60-52-42h64l20-62 20 62h64l-52 42 18 60-50-38-50 38Z"/>
    </Icon>
  );
});

IconMaterialSavedSearchW100.displayName = 'OnesyIconMaterialSavedSearchW100';

export default IconMaterialSavedSearchW100;
