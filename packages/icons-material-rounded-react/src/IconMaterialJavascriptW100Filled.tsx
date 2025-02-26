import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJavascriptW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JavascriptW100Filled'

      short_name='Javascript'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-376q-11 0-19.5-8.5T252-404v-42q0-6 4-10t10-4q6 0 10 4t4 10v42h90v-166q0-6 4-10t10-4q6 0 10 4t4 10v166q0 11-8.5 19.5T370-376h-90Zm244 0q-11 0-19.5-8.5T496-404v-22q0-6 4-10t10-4q6 0 10 4t4 10v22h112v-66H516q-8 0-14-6t-6-14v-66q0-11 8.5-19.5T524-584h112q11 0 19.5 8.5T664-556v22q0 6-4 10t-10 4q-6 0-10-4t-4-10v-22H524v66h120q8 0 14 6t6 14v66q0 11-8.5 19.5T636-376H524Z"/>
    </Icon>
  );
});

IconMaterialJavascriptW100Filled.displayName = 'OnesyIconMaterialJavascriptW100Filled';

export default IconMaterialJavascriptW100Filled;
