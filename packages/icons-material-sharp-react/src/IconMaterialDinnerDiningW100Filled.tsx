import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDinnerDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DinnerDiningW100Filled'

      short_name='DinnerDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m187-148-56-56h696l-56 56H187Zm-15-106q7-14 17.5-25.5T212-302v-322h-40v-28h40v-40h-40v-28h40v-40h-40v-28h298v68h318v28H470v68H340v282q26 3 51 13t45 27q6-60 51-100t105-40q65.7 0 110.85 46.96Q748-348.07 748-282v28H172Zm168-466h102v-40H340v40Zm0 68h102v-40H340v40Zm-100-68h72v-40h-72v40Zm0 68h72v-40h-72v40Zm0 331q17-9 35-14t37-7.33V-624h-72v303Z"/>
    </Icon>
  );
});

IconMaterialDinnerDiningW100Filled.displayName = 'OnesyIconMaterialDinnerDiningW100Filled';

export default IconMaterialDinnerDiningW100Filled;
