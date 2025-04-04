import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPsychologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychologyW100Filled'

      short_name='Psychology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m461-415 1 19q0 6 4.5 10t10.5 4h6q6 0 10.5-4t4.5-10l1-19q18-3 34.5-11.5T561-449l15 8q5 3 11 1.5t9-6.5l3-5q3-5 2-10.5t-6-9.5l-15-11q8-19 8-38t-8-38l15-11q5-4 6-9.5t-2-10.5l-3-5q-3-5-9-6.5t-11 1.5l-15 8q-11-14-27.5-22.5T499-625l-1-19q0-6-4.5-10t-10.5-4h-6q-6 0-10.5 4t-4.5 10l-1 19q-18 3-34.5 11.5T399-591l-15-8q-5-3-11-1.5t-9 6.5l-3 5q-3 5-2 10.5t6 9.5l15 11q-8 19-8 38t8 38l-15 11q-5 4-6 9.5t2 10.5l3 5q3 5 9 6.5t11-1.5l15-8q11 14 27.5 22.5T461-415Zm19-26q-33 0-56-23t-23-56q0-33 23-56t56-23q33 0 56 23t23 56q0 33-23 56t-56 23ZM306-132q-6 0-10-4t-4-10v-130q-57-52-88.5-115.5T172-521q0-128 90-217.5T480-828q103 0 187.5 63.5T777-601l38 152q4 14-5 25.5T786-412h-78v140q0 25-17.5 42.5T648-212H548v66q0 6-4 10t-10 4H306Z"/>
    </Icon>
  );
});

IconMaterialPsychologyW100Filled.displayName = 'OnesyIconMaterialPsychologyW100Filled';

export default IconMaterialPsychologyW100Filled;
