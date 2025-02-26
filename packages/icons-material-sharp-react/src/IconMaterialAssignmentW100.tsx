import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentW100'

      short_name='Assignment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h254q-11-29 6-54.5t48.5-25.5q31.5 0 48.5 25.5t5 54.5h254v616H172Zm28-28h560v-560H200v560Zm106-118h228v-28H306v28Zm0-148h348v-28H306v28Zm0-148h348v-28H306v28Zm174-166q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialAssignmentW100.displayName = 'OnesyIconMaterialAssignmentW100';

export default IconMaterialAssignmentW100;
