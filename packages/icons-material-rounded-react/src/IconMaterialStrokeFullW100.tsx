import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStrokeFullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrokeFullW100'

      short_name='StrokeFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M477-132q-72 0-135.5-27.5T231-234q-47-47-74.5-110.5T129-480q0-72 27.5-135.5T231-726q47-47 110.5-74.5T477-828q72 0 135.5 27.5T723-726q47 47 74.5 110.5T825-480q0 72-27.5 135.5T723-234q-47 47-110.5 74.5T477-132Zm44-31q107-14 183-90t90-183L521-163ZM160-527l270-270q-106 15-180.5 89.5T160-527Zm16 157 411-411q-26-10-54.5-14.5T475-800L157-482q0 29 5 57.5t14 54.5Zm65 106 452-453q-17-16-37-28.5T614-769L188-343q11 22 24 42t29 37Zm99 73 426-427q-11-22-24-41.5T713-696L261-243q17 16 37 28.5t42 23.5Zm139 31 318-318q0-29-4.5-57.5T778-590L367-179q26 10 54.5 14.5T479-160Z"/>
    </Icon>
  );
});

IconMaterialStrokeFullW100.displayName = 'OnesyIconMaterialStrokeFullW100';

export default IconMaterialStrokeFullW100;
