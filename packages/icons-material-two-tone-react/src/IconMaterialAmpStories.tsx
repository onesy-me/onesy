import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAmpStories = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStories'

      short_name='AmpStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g/><g><g opacity=".3"><rect height="11" width="6" x="9" y="6"/></g><path d="M7,19h10V4H7V19z M9,6h6v11H9V6z"/><rect height="11" width="2" x="3" y="6"/><rect height="11" width="2" x="19" y="6"/></g></g>
    </Icon>
  );
});

IconMaterialAmpStories.displayName = 'OnesyIconMaterialAmpStories';

export default IconMaterialAmpStories;
