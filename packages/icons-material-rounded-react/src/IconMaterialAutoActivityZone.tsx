import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoActivityZone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoActivityZone'

      short_name='AutoActivityZone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-1.25 0-2.125-.875T2 19q0-.975.562-1.738Q3.125 16.5 4 16.175v-8.35Q3.125 7.5 2.562 6.737 2 5.975 2 5q0-1.25.875-2.125T5 2q.975 0 1.738.562Q7.5 3.125 7.825 4h8.35q.3-.875 1.063-1.438Q18 2 19 2q1.25 0 2.125.875T22 5q0 1-.562 1.762-.563.763-1.438 1.063v8.35q.875.325 1.438 1.087Q22 18.025 22 19q0 1.25-.875 2.125T19 22q-.975 0-1.737-.562-.763-.563-1.088-1.438h-8.35q-.325.875-1.087 1.438Q5.975 22 5 22ZM5 6q.425 0 .713-.287Q6 5.425 6 5t-.287-.713Q5.425 4 5 4t-.713.287Q4 4.575 4 5t.287.713Q4.575 6 5 6Zm14 0q.425 0 .712-.287Q20 5.425 20 5t-.288-.713Q19.425 4 19 4t-.712.287Q18 4.575 18 5t.288.713Q18.575 6 19 6ZM7.825 18h8.35q.225-.65.7-1.125t1.125-.7v-8.35q-.65-.225-1.125-.7T16.175 6h-8.35q-.225.65-.7 1.125T6 7.825v8.35q.65.225 1.125.7t.7 1.125ZM19 20q.425 0 .712-.288Q20 19.425 20 19t-.288-.712Q19.425 18 19 18t-.712.288Q18 18.575 18 19t.288.712Q18.575 20 19 20ZM5 20q.425 0 .713-.288Q6 19.425 6 19t-.287-.712Q5.425 18 5 18t-.713.288Q4 18.575 4 19t.287.712Q4.575 20 5 20ZM5 5Zm14 0Zm0 14ZM5 19Zm7-3-1.25-2.75L8 12l2.75-1.25L12 8l1.25 2.75L16 12l-2.75 1.25Z"/>
    </Icon>
  );
});

IconMaterialAutoActivityZone.displayName = 'OnesyIconMaterialAutoActivityZone';

export default IconMaterialAutoActivityZone;
