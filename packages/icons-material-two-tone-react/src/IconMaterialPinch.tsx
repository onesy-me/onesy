import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pinch'

      short_name='Pinch'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M21,15.56l-4.24-1.89H15V7.5C15,7.22,14.78,7,14.5,7S14,7.22,14,7.5v10.61l-4.17-0.89l3.7,3.78h6.55 L21,15.56z" opacity=".3"/><path d="M6,2.5V1h5v5H9.5V3.56L3.56,9.5H6V11H1V6h1.5v2.44L8.44,2.5H6z M21.89,13.77l-3.8-1.67C17.96,12.04,17.81,12,17.65,12H17 V7.5C17,6.12,15.88,5,14.5,5S12,6.12,12,7.5v8.15l-1.87-0.4c-0.19-0.03-1.02-0.15-1.73,0.56L7,17.22l5.12,5.19 C12.49,22.79,13,23,13.53,23h6.55c0.98,0,1.81-0.7,1.97-1.67l0.92-5.44C23.12,15.03,22.68,14.17,21.89,13.77z M20.08,21h-6.55 l-3.7-3.78L14,18.11V7.5C14,7.22,14.22,7,14.5,7S15,7.22,15,7.5v6.18h1.76L21,15.56L20.08,21z"/></g>
    </Icon>
  );
});

IconMaterialPinch.displayName = 'OnesyIconMaterialPinch';

export default IconMaterialPinch;
