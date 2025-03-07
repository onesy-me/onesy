import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialManageSearch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageSearch'

      short_name='ManageSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="2" width="5" x="2" y="12"/><path d="M18.17,13.75C18.69,12.96,19,12.02,19,11c0-2.76-2.24-5-5-5s-5,2.24-5,5s2.24,5,5,5c1.02,0,1.96-0.31,2.76-0.83L20.59,19 L22,17.59L18.17,13.75z M14,14c-1.65,0-3-1.35-3-3c0-1.65,1.35-3,3-3s3,1.35,3,3C17,12.65,15.65,14,14,14z"/><rect height="2" width="5" x="2" y="7"/><rect height="2" width="10" x="2" y="17"/></g></g>
    </Icon>
  );
});

IconMaterialManageSearch.displayName = 'OnesyIconMaterialManageSearch';

export default IconMaterialManageSearch;
