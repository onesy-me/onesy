import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewKanban = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewKanban'

      short_name='ViewKanban'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,19h14V5H5V19z M15,7h2v8h-2V7z M11,7h2v5h-2V7z M7,7h2v10H7V7z" opacity=".3"/><rect height="10" width="2" x="7" y="7"/><rect height="5" width="2" x="11" y="7"/><rect height="8" width="2" x="15" y="7"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/></g></g>
    </Icon>
  );
});

IconMaterialViewKanban.displayName = 'OnesyIconMaterialViewKanban';

export default IconMaterialViewKanban;
