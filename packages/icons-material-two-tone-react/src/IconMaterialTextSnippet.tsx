import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSnippet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippet'

      short_name='TextSnippet'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M14.17,5L19,9.83V19H5V5L14.17,5L14.17,5 M7,15h10v2H7V15z M7,11h10v2H7V11z M7,7h7v2H7V7z" opacity=".3"/><path d="M14.17,5L19,9.83V19H5V5L14.17,5L14.17,5 M14.17,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V9.83 c0-0.53-0.21-1.04-0.59-1.41l-4.83-4.83C15.21,3.21,14.7,3,14.17,3L14.17,3z M7,15h10v2H7V15z M7,11h10v2H7V11z M7,7h7v2H7V7z"/></g>
    </Icon>
  );
});

IconMaterialTextSnippet.displayName = 'OnesyIconMaterialTextSnippet';

export default IconMaterialTextSnippet;
