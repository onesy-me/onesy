import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPsychologyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychologyW100'

      short_name='Psychology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M463-382h34l2-33q18-3 34.5-11.5T561-449l28 15 17-29-26-19q8-19 8-38t-8-38l26-19-17-29-28 15q-11-14-27.5-22.5T499-625l-2-33h-34l-2 33q-18 3-34.5 11.5T399-591l-28-15-17 29 26 19q-8 19-8 38t8 38l-26 19 17 29 28-15q11 14 27.5 22.5T461-415l2 33Zm17-59q-33 0-56-23t-23-56q0-33 23-56t56-23q33 0 56 23t23 56q0 33-23 56t-56 23ZM292-132v-144q-57-52-88.5-115.5T172-521q0-128 90-217.5T480-828q103 0 187.5 63.5T777-601l47 189H708v200H548v80h-28v-108h160v-200h108l-38-155q-23-92-99-148.5T480-800q-116 0-198 81.5T200-521q0 60 24.5 113.5T294-312l26 24v156h-28Zm202-334Z"/>
    </Icon>
  );
});

IconMaterialPsychologyW100.displayName = 'OnesyIconMaterialPsychologyW100';

export default IconMaterialPsychologyW100;
