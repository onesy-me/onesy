import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFaceRetouchingNaturalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceRetouchingNaturalFilled'

      short_name='FaceRetouchingNatural'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.15.825-3.988.825-1.837 2.213-3.187 1.387-1.35 3.187-2.1Q10.025 1.975 12 2q1.025 0 2 .175.975.175 2 .675l-3.475 1.6 4.75 2.3 1.45 3.175q-2.275.275-4.688-.525-2.412-.8-4.287-3.1-.875 2.125-2.387 3.5Q5.85 11.175 4 11.85q0 3.475 2.338 5.813Q8.675 20 12 20q3.4 0 5.725-2.4Q20.05 15.2 20 12q0-.35-.025-.625t-.075-.625L21.15 8q.45 1.05.65 2.012.2.963.2 1.988 0 2-.762 3.812-.763 1.813-2.1 3.188-1.338 1.375-3.163 2.188Q14.15 22 12 22Zm-3-7.75q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Zm6 0q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363ZM19.5 8l-1.1-2.4L16 4.5l2.4-1.1L19.5 1l1.1 2.4L23 4.5l-2.4 1.1Z"/>
    </Icon>
  );
});

IconMaterialFaceRetouchingNaturalFilled.displayName = 'OnesyIconMaterialFaceRetouchingNaturalFilled';

export default IconMaterialFaceRetouchingNaturalFilled;
