import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFontDownloadOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadOffFilled'

      short_name='FontDownloadOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M819-28 485-362l78-36 275 275v43H80v-687l-53-53 57-57L876-85l-57 57Zm61-167L624-451 522-720h-84l-23 60-220-220h685v685Zm-624-45h84l44-122h101l-74-74-59-59-96 255Zm222-390h4l20 57-33-33 9-24Zm142 390h84l-10-27-131-131 57 158Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadOffFilled.displayName = 'OnesyIconMaterialFontDownloadOffFilled';

export default IconMaterialFontDownloadOffFilled;
