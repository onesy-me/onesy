import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnippetFolder = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnippetFolder'

      short_name='SnippetFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M9.17,6H4v12l16,0V8h-8.83L9.17,6z" opacity=".3"/><path d="M20,6h-8l-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18L4,18V6h5.17 l2,2H20V18z M17.5,12.12v3.38l-3,0v-5h1.38L17.5,12.12z M16.5,9H13v8l6,0v-5.5L16.5,9L16.5,9z"/></g>
    </Icon>
  );
});

IconMaterialSnippetFolder.displayName = 'OnesyIconMaterialSnippetFolder';

export default IconMaterialSnippetFolder;
