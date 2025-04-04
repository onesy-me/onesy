import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnfoldMoreDouble = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreDouble'

      short_name='UnfoldMoreDouble'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M12,7.83L15.17,11l1.41-1.41L12,5L7.41,9.59L8.83,11L12,7.83z M12,2.83L15.17,6l1.41-1.41L12,0L7.41,4.59L8.83,6L12,2.83 z M12,21.17L8.83,18l-1.41,1.41L12,24l4.59-4.59L15.17,18L12,21.17z M12,16.17L8.83,13l-1.41,1.41L12,19l4.59-4.59L15.17,13 L12,16.17z"/></g></g></g>
    </Icon>
  );
});

IconMaterialUnfoldMoreDouble.displayName = 'OnesyIconMaterialUnfoldMoreDouble';

export default IconMaterialUnfoldMoreDouble;
