import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInvertColorsOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsOff'

      short_name='InvertColorsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M12,14.83L12,19c-3.31,0-6-2.63-6-5.87c0-1.19,0.36-2.32,1.02-3.28L12,14.83z M12,4.81l0,4.37l-2.2-2.2 L12,4.81" opacity=".3"/><path d="M21.19,21.19L2.81,2.81L1.39,4.22l4.2,4.2c-1,1.31-1.6,2.94-1.6,4.7C4,17.48,7.58,21,12,21c1.75,0,3.36-0.56,4.67-1.5 l3.1,3.1L21.19,21.19z M12,19c-3.31,0-6-2.63-6-5.87c0-1.19,0.36-2.32,1.02-3.28L12,14.83V19z M8.38,5.56L12,2l5.65,5.56l0,0 C19.1,8.99,20,10.96,20,13.13c0,1.18-0.27,2.29-0.74,3.3L12,9.17V4.81L9.8,6.97L8.38,5.56z"/>
    </Icon>
  );
});

IconMaterialInvertColorsOff.displayName = 'OnesyIconMaterialInvertColorsOff';

export default IconMaterialInvertColorsOff;
