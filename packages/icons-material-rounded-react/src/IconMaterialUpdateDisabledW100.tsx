import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpdateDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateDisabledW100'

      short_name='UpdateDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-136 678-242q-41 33-91 51.5T481-172q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-57 19-106.5t52-89.5L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5Zm-303-64q50 0 95-17t81-46L263-657q-29 37-45.5 81.5T201-480q0 117 81.5 198.5T481-200Zm126-440q-6 0-10-4t-4-10q0-6 4-10t10-4h82q-42-43-95-67.5T481-760q-32 0-63.5 6.5T358-732q-5 2-10.5 1.5T339-736q-3-5-2-11t6-8q32-16 67.5-24.5T481-788q65 0 124 26.5T709-688v-82q0-6 4-10t10-4q6 0 10 4t4 10v100q0 13-8.5 21.5T707-640H607Zm-126 42q-6 0-10-4t-4-10v-54q0-6 4-10t10-4q6 0 10 4t4 10v54q0 6-4 10t-10 4Zm253 259q-5-5-4-10.5t4-10.5q8-14 13.5-32t8.5-33q2-7 6.5-11t10.5-3q7 1 9.5 7t.5 13q-4 20-9 43t-19 37q-5 5-10.5 5t-10.5-5Z"/>
    </Icon>
  );
});

IconMaterialUpdateDisabledW100.displayName = 'OnesyIconMaterialUpdateDisabledW100';

export default IconMaterialUpdateDisabledW100;
