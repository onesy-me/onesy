import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForward30W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward30W100'

      short_name='Forward30'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24h18l-58-58q-5-5-5-10t5-10q5-5 10.5-4.5t9.5 4.5l71 70q9 9 9 21t-9 21l-69 70q-5 5-10 5t-10-5q-5-5-4.5-10.5t4.5-9.5l56-56h-18q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-6 4-10t10-4q6 0 10 4t4 10q0 64-24 120t-66 98q-42 42-98 66t-120 24Zm-54-204H316q-6 0-10-4t-4-10q0-6 4-10t10-4h106v-62h-76q-6 0-10-4t-4-10q0-6 4-10t10-4h76v-62H316q-6 0-10-4t-4-10q0-6 4-10t10-4h110q11 0 17.5 6.5T450-520v160q0 11-6.5 17.5T426-336Zm124 0q-17 0-28.5-11.5T510-376v-128q0-17 11.5-28.5T550-544h68q17 0 28.5 11.5T658-504v128q0 17-11.5 28.5T618-336h-68Zm0-28h68q6 0 9-3t3-9v-128q0-6-3-9t-9-3h-68q-6 0-9 3t-3 9v128q0 6 3 9t9 3Z"/>
    </Icon>
  );
});

IconMaterialForward30W100.displayName = 'OnesyIconMaterialForward30W100';

export default IconMaterialForward30W100;
