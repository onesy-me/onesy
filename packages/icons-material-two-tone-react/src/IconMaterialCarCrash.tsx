import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarCrash = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarCrash'

      short_name='CarCrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g opacity=".3"><path d="M17.91,13c0.06,0.16,0.09,0.33,0.09,0.5c0,0.83-0.67,1.5-1.5,1.5S15,14.33,15,13.5c0-0.39,0.15-0.74,0.39-1 c-0.86-0.35-1.63-0.86-2.29-1.5H5v5h14v-3.07C18.67,12.98,18.39,13,17.91,13z M7.5,15C6.67,15,6,14.33,6,13.5S6.67,12,7.5,12 S9,12.67,9,13.5S8.33,15,7.5,15z"/></g><g><path d="M18,1c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,1,18,1z M18.5,7h-1V3h1V7z M18.5,8v1h-1V8H18.5z M6,13.5 C6,12.67,6.67,12,7.5,12S9,12.67,9,13.5S8.33,15,7.5,15S6,14.33,6,13.5z M19,12.93c0.65-0.09,1.34-0.28,2-0.6h0V19 c0,0.55-0.45,1-1,1h-1c-0.55,0-1-0.45-1-1v-1H6v1c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1v-8l2.08-5.99C5.29,4.42,5.84,4,6.5,4 l4.79,0C11.1,4.63,11,5.31,11,6H6.85L5.81,9h5.86v0c0.36,0.75,0.84,1.43,1.43,2L5,11v5h14L19,12.93z M17.91,13 c-0.89-0.01-1.74-0.19-2.53-0.51C15.15,12.76,15,13.11,15,13.5c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 C18,13.32,17.97,13.16,17.91,13z"/></g></g></g>
    </Icon>
  );
});

IconMaterialCarCrash.displayName = 'OnesyIconMaterialCarCrash';

export default IconMaterialCarCrash;
