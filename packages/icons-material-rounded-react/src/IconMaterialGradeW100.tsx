import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGradeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeW100'

      short_name='Grade'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Zm126-43-139 84q-5 2-8.5 1.5T325-247q-4-2-6-6.5t0-9.5l37-157-122-106q-4-3-5.5-7.5t.5-8.5q2-4 5-6.5t8-3.5l161-14 63-149q2-5 5.5-7t8.5-2q5 0 8.5 2t5.5 7l63 149 161 14q5 1 8 3.5t5 6.5q2 4 .5 8.5T726-526L604-420l37 157q2 5 0 9.5t-6 6.5q-4 2-7.5 2.5T619-246l-139-84Zm0-140Z"/>
    </Icon>
  );
});

IconMaterialGradeW100.displayName = 'OnesyIconMaterialGradeW100';

export default IconMaterialGradeW100;
