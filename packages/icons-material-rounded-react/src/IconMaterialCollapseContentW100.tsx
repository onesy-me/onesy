import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCollapseContentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollapseContentW100'

      short_name='CollapseContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-412H266q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h144q12.75 0 21.38 8.62Q440-422.75 440-410v144q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-146Zm136-136h146q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H550q-12.75 0-21.37-8.63Q520-537.25 520-550v-144q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v146Z"/>
    </Icon>
  );
});

IconMaterialCollapseContentW100.displayName = 'OnesyIconMaterialCollapseContentW100';

export default IconMaterialCollapseContentW100;
