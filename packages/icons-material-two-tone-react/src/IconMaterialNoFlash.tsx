import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoFlash = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlash'

      short_name='NoFlash'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M13.42,16.24l2.55,2.55L15.96,20H4v-8.6h3.02l0.59-0.65l0.15-0.16l1.5,1.5C7.68,12.43,6.5,13.82,6.5,15.5 c0,1.93,1.57,3.5,3.5,3.5C11.68,19,13.07,17.82,13.42,16.24z M16,13.17l0-1.77h-1.77L16,13.17z" opacity=".3"/><path d="M20.4,5.6H22L19,11V7h-1V2h4L20.4,5.6z M16,11.4v1.77l2,2V11c0-0.88-0.72-1.6-1.6-1.6h-2.54L12.58,8h-1.75l3.4,3.4H16z M17.97,17.97L2.1,2.1L0.69,3.51l5.66,5.66L6.14,9.4H3.6C2.72,9.4,2,10.12,2,11v9.4C2,21.28,2.72,22,3.6,22h12.8 c0.75,0,1.38-0.52,1.55-1.22l2.54,2.54l1.41-1.41L17.97,17.97z M11.5,15.5c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5 S9.17,14,10,14S11.5,14.67,11.5,15.5z M15.96,20H4v-8.6h2.14h0.88l0.59-0.65l0.15-0.16l1.5,1.5C7.68,12.43,6.5,13.82,6.5,15.5 c0,1.93,1.57,3.5,3.5,3.5c1.68,0,3.07-1.18,3.42-2.76l2.55,2.55L15.96,20z"/><path d="M0,0h24v24H0V0z" fill="none"/></g>
    </Icon>
  );
});

IconMaterialNoFlash.displayName = 'OnesyIconMaterialNoFlash';

export default IconMaterialNoFlash;
