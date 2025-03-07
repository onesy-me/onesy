import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInkEraserOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkEraserOff'

      short_name='InkEraserOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M763-84 602-244l-58 60q-11 11-25.5 17.5T487-160H223q-16 0-30.5-6T167-183l-62-62q-23-23-23.5-57t22.5-58l188-194L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84ZM224-240h262l59-61-197-197-188 194 64 64Zm655-321q0 16-5.5 30.5T856-504L743-388q-12 12-28.5 12T686-388q-12-12-11.5-28t11.5-28l114-118-198-198-114 117q-11 12-28 12t-29-12q-11-11-11-27t11-28l113-118q12-12 27-18t30-6q16 0 30.5 5.5T657-817l199 199q12 11 17.5 26t5.5 31Zm-320 46ZM447-400Z"/>
    </Icon>
  );
});

IconMaterialInkEraserOff.displayName = 'OnesyIconMaterialInkEraserOff';

export default IconMaterialInkEraserOff;
