import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDocsAddOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocsAddOn'

      short_name='DocsAddOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-121q-17 0-28.5-11.5T640-161v-80h-80q-17 0-28.5-11.5T520-281q0-17 11.5-28.5T560-321h80v-80q0-17 11.5-28.5T680-441q17 0 28.5 11.5T720-401v80h80q17 0 28.5 11.5T840-281q0 17-11.5 28.5T800-241h-80v80q0 17-11.5 28.5T680-121ZM200-240q-17 0-28.5-11.5T160-280q0-17 11.5-28.5T200-320h243q-3 21-2.5 40t3.5 40H200Zm0-160q-17 0-28.5-11.5T160-440q0-17 11.5-28.5T200-480h346q-23 16-41.5 36T472-400H200Zm0-160q-17 0-28.5-11.5T160-600q0-17 11.5-28.5T200-640h520q17 0 28.5 11.5T760-600q0 17-11.5 28.5T720-560H200Zm0-160q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h520q17 0 28.5 11.5T760-760q0 17-11.5 28.5T720-720H200Z"/>
    </Icon>
  );
});

IconMaterialDocsAddOn.displayName = 'OnesyIconMaterialDocsAddOn';

export default IconMaterialDocsAddOn;
