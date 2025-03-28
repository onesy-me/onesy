import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGasMeter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GasMeter'

      short_name='GasMeter'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M16,6H8C6.9,6,6,6.9,6,8v10c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V8C18,6.9,17.1,6,16,6z M12,18 c-1.38,0-2.5-1.1-2.5-2.46c0-1.09,0.43-1.39,2.5-3.79c2.05,2.38,2.5,2.7,2.5,3.79C14.5,16.9,13.38,18,12,18z M16,10H8V8h8V10z" opacity=".3"/><path d="M16,4h-1V2h-2v2h-2V2H9v2H8C5.79,4,4,5.79,4,8v10c0,2.21,1.79,4,4,4h8c2.21,0,4-1.79,4-4V8C20,5.79,18.21,4,16,4z M18,18 c0,1.1-0.9,2-2,2H8c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2V18z"/><path d="M9.5,15.54C9.5,16.9,10.62,18,12,18s2.5-1.1,2.5-2.46c0-1.09-0.45-1.41-2.5-3.79C9.93,14.15,9.5,14.46,9.5,15.54z"/><rect height="2" width="8" x="8" y="8"/></g></g>
    </Icon>
  );
});

IconMaterialGasMeter.displayName = 'OnesyIconMaterialGasMeter';

export default IconMaterialGasMeter;
