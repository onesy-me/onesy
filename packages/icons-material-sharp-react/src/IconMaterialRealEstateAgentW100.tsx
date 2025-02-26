import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRealEstateAgentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RealEstateAgentW100'

      short_name='RealEstateAgent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m561-90-312-92v50H113v-292h236l286 104v60h193v88L561-90Zm-420-70h80v-236h-80v236Zm418 40 241-73v-39H525l-124-40 10-27 117 39h79v-40l-262-96h-96v184l310 92Zm201-240v-286L534-804 308-646v122h-28v-135l254-181 254 181v299h-28ZM534-804Zm25 187h30v-30h-30v30Zm-80 0h30v-30h-30v30Zm80 80h30v-30h-30v30Zm-80 0h30v-30h-30v30Z"/>
    </Icon>
  );
});

IconMaterialRealEstateAgentW100.displayName = 'OnesyIconMaterialRealEstateAgentW100';

export default IconMaterialRealEstateAgentW100;
