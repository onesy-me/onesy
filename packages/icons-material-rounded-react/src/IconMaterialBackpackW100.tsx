import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackpackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackW100'

      short_name='Backpack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-24.75 0-42.37-17Q212-166 212-189v-430q0-49.2 34-86.1 34-36.9 86-41.9v-51q0-12.75 8.63-21.38Q349.25-828 362-828h8q12.75 0 21.38 8.62Q400-810.75 400-798v50h160v-50q0-12.75 8.63-21.38Q577.25-828 590-828h8q12.75 0 21.38 8.62Q628-810.75 628-798v51q52 5 86 41.9t34 86.1v430q0 23-17.62 40-17.63 17-42.38 17H272Zm0-28h416q14 0 23-8.5t9-20.5v-430q0-41.66-31.14-71.33T614-720H346q-43.73 0-74.86 29.67Q240-660.66 240-619v430q0 12 9 20.5t23 8.5Zm340-258v62q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-60q0-12.75-8.62-21.38Q622.75-446 610-446H334q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h278Zm-132-22Z"/>
    </Icon>
  );
});

IconMaterialBackpackW100.displayName = 'OnesyIconMaterialBackpackW100';

export default IconMaterialBackpackW100;
