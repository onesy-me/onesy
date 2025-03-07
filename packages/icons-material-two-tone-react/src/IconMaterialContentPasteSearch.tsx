import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentPasteSearch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteSearch'

      short_name='ContentPasteSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M10,16.5c0-3.58,2.92-6.5,6.5-6.5c0.89,0,1.73,0.18,2.5,0.5V5h-2v3H7V5H5v14h5.5 C10.18,18.23,10,17.39,10,16.5z" opacity=".3"/><path d="M10.5,19H5V5h2v3h10V5h2v5.5c0.75,0.31,1.42,0.76,2,1.32V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3 H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6.82C11.27,20.42,10.81,19.75,10.5,19z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1 S11.45,3,12,3z"/><path d="M20.3,18.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S12,14,12,16.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l2.7,2.7 l1.4-1.4L20.3,18.9z M16.5,19c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5C19,17.9,17.9,19,16.5,19z"/></g></g>
    </Icon>
  );
});

IconMaterialContentPasteSearch.displayName = 'OnesyIconMaterialContentPasteSearch';

export default IconMaterialContentPasteSearch;
