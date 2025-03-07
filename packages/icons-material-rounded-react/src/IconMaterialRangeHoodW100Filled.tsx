import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRangeHoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RangeHoodW100Filled'

      short_name='RangeHood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M202-434q-15 0-21-13.5t5-24.5l146-146v-110q0-24.75 17.63-42.38Q367.25-788 392-788h176q24.75 0 42.38 17.62Q628-752.75 628-728v110l146 146q11 11 5.21 24.5Q773.43-434 758-434H202Zm-10 222q-24.75 0-42.37-17.63Q132-247.25 132-272v-104q0-12.75 8.63-21.38Q149.25-406 162-406h636q12.75 0 21.38 8.62Q828-388.75 828-376v104q0 24.75-17.62 42.37Q792.75-212 768-212H192Zm222-96h132q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4H414q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4Z"/>
    </Icon>
  );
});

IconMaterialRangeHoodW100Filled.displayName = 'OnesyIconMaterialRangeHoodW100Filled';

export default IconMaterialRangeHoodW100Filled;
