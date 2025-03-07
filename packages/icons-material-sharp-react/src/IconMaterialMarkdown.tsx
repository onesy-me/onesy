import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkdown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Markdown'

      short_name='Markdown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m640-360 120-120-42-43-48 48v-125h-60v125l-48-48-42 43 120 120ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Zm60-120h60v-180h40v120h60v-120h40v180h60v-240H220v240Z"/>
    </Icon>
  );
});

IconMaterialMarkdown.displayName = 'OnesyIconMaterialMarkdown';

export default IconMaterialMarkdown;
