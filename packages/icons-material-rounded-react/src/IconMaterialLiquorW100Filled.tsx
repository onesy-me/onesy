import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiquorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiquorW100Filled'

      short_name='Liquor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M235-160v-143q-31-6-47-26.5T172-378v-234q0-12.75 8.63-21.38Q189.25-642 202-642h94q12.75 0 21.38 8.62Q326-624.75 326-612v234q0 26-16.5 47.5T263-303v143h49q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H186q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h49Zm-35-311h98v-143h-98v143Zm316 339q-11.55 0-19.77-8.23Q488-148.45 488-160v-389q0-8.93 6-15.96 6-7.04 14-10.04l38-15q30-11 47-28.5t17-59.5v-121.82q0-12.18 8.05-20.18t19.95-8h40q11.9 0 19.95 8.05Q706-811.9 706-800v122q0 42 17.5 59.5T771-590l39 15q8 3.08 13 10.09 5 7.02 5 15.91v389q0 11.55-8.22 19.77Q811.55-132 800-132H516Zm122-623h40v-45h-40v45ZM516-449h284v-100l-39-15q-38-14-60.5-37.5T678-678v-49h-40v49q0 53-22.5 76.5T555-564l-39 15v100Zm0 289h284v-116H516v116Z"/>
    </Icon>
  );
});

IconMaterialLiquorW100Filled.displayName = 'OnesyIconMaterialLiquorW100Filled';

export default IconMaterialLiquorW100Filled;
