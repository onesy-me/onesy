import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkdownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkdownW100'

      short_name='Markdown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m640-376 97-97-19-20-64 63v-154h-28v154l-64-63-19 20 97 97ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Zm76-136h28v-180h72v120h28v-120h72v180h28v-208H236v208Z"/>
    </Icon>
  );
});

IconMaterialMarkdownW100.displayName = 'OnesyIconMaterialMarkdownW100';

export default IconMaterialMarkdownW100;
