import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubjectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubjectW100Filled'

      short_name='Subject'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-241q-8.5 0-14.25-5.45-5.75-5.44-5.75-13.5 0-8.05 5.75-14.05t14.25-6h262q5.95 0 9.98 4.31Q508-271.38 508-265q0 5.95-4 9.98-4 4.02-9 4.02l-263 10Zm-6-154q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm0-142q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm6-143q-8.5 0-14.25-5.75T212-700q0-8.5 5.75-14.25T232-720h496q8.5 0 14.25 5.75T748-700q0 8.5-5.75 14.25T728-680H232Z"/>
    </Icon>
  );
});

IconMaterialSubjectW100Filled.displayName = 'OnesyIconMaterialSubjectW100Filled';

export default IconMaterialSubjectW100Filled;
