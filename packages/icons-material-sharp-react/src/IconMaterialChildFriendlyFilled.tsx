import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChildFriendlyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChildFriendlyFilled'

      short_name='ChildFriendly'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-80q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17Zm440 0q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17ZM540-656 384-844q36-18 78-27t90-9q51 0 97.5 14.5T732-824L540-656ZM280-240v-508l-20-24q-14-17-23.5-22.5T216-800q-24 0-40 18t-16 42H80q0-57 39.5-98.5T216-880q30 0 55 14t51 44l483 582H280Z"/>
    </Icon>
  );
});

IconMaterialChildFriendlyFilled.displayName = 'OnesyIconMaterialChildFriendlyFilled';

export default IconMaterialChildFriendlyFilled;
