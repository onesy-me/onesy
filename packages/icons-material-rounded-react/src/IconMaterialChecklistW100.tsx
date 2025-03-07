import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChecklistW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistW100'

      short_name='Checklist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m236-296 160-160q4-4 10-4.5t10 4.5q4 4.36 4 10.18 0 5.82-4 9.82L258-278q-9 9-21 9t-21-9l-75-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.67-4 5.66 0 9.33 4l75 76Zm0-280 160-160q4-4 10-4.5t10 4.5q4 4.36 4 10.18 0 5.82-4 9.82L258-558q-9 9-21 9t-21-9l-75-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.67-4 5.66 0 9.33 4l75 76Zm299 250q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h280q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H535Zm0-280q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h280q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H535Z"/>
    </Icon>
  );
});

IconMaterialChecklistW100.displayName = 'OnesyIconMaterialChecklistW100';

export default IconMaterialChecklistW100;
