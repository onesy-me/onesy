import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDocsAddOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocsAddOnFilled'

      short_name='DocsAddOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-121v-120H520v-80h120v-120h80v120h120v80H720v120h-80ZM160-240v-80h283q-3 21-2.5 40t3.5 40H160Zm0-160v-80h386q-23 16-41.5 36T472-400H160Zm0-160v-80h600v80H160Zm0-160v-80h600v80H160Z"/>
    </Icon>
  );
});

IconMaterialDocsAddOnFilled.displayName = 'OnesyIconMaterialDocsAddOnFilled';

export default IconMaterialDocsAddOnFilled;
