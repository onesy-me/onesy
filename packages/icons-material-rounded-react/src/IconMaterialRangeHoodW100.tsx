import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRangeHoodW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RangeHoodW100'

      short_name='RangeHood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-24.75 0-42.37-17.63Q132-247.25 132-272v-136q0-5.43 2.44-10.35T141-427l191-191v-110q0-24.75 17.63-42.38Q367.25-788 392-788h176q24.75 0 42.38 17.62Q628-752.75 628-728v110l182 182q8 8 13 18.96 5 10.95 5 23.04v122q0 24.75-17.62 42.37Q792.75-212 768-212H192Zm288-548h-88q-14 0-23 9t-9 23v95q0 12.44-5 23.72T342-590L186-434h588L618-590q-8-8-13-19.28-5-11.28-5-23.72v-95q0-14-9-23t-23-9h-88ZM192-240h576q14 0 23-9t9-23v-134H160v134q0 14 9 23t23 9Zm222-68q-6.07 0-10.03-3.95-3.97-3.96-3.97-10 0-6.05 3.97-10.05 3.96-4 10.03-4h132q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4H414Z"/>
    </Icon>
  );
});

IconMaterialRangeHoodW100.displayName = 'OnesyIconMaterialRangeHoodW100';

export default IconMaterialRangeHoodW100;
