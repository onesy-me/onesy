import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFluorescentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluorescentW100Filled'

      short_name='Fluorescent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-468v-24q0-25 17.5-42.5T312-552h336q25 0 42.5 17.5T708-492v24q0 25-17.5 42.5T648-408H312q-25 0-42.5-17.5T252-468Zm214-314v-60q0-6 4-10t10-4q6 0 10 4t4 10v60q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm252 86 36-36q4-4 9.5-4.5T774-732q5 5 5 10t-5 10l-36 36q-4 4-9.5 4.5T718-676q-5-5-5-10t5-10ZM466-122v-60q0-6 4-10t10-4q6 0 10 4t4 10v60q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm288-106-36-36q-4-4-4.5-9.5T718-284q5-5 10-5t10 5l36 36q4 4 4.5 9.5T774-228q-5 5-10 5t-10-5ZM222-676l-36-36q-4-4-4.5-9.5T186-732q5-5 10-5t10 5l36 36q4 4 4.5 9.5T242-676q-5 5-10 5t-10-5Zm-36 428 36-36q4-4 9.5-4.5T242-284q5 5 5 10t-5 10l-36 36q-4 4-9.5 4.5T186-228q-5-5-5-10t5-10Z"/>
    </Icon>
  );
});

IconMaterialFluorescentW100Filled.displayName = 'OnesyIconMaterialFluorescentW100Filled';

export default IconMaterialFluorescentW100Filled;
