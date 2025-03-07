import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAbcW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AbcW100Filled'

      short_name='Abc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M411-376q-6 0-10.5-4.5T396-391v-178q0-6 4.5-10.5T411-584h125q11 0 19.5 8.5T564-556v52q0 8-5 15t-13 9q8 3 13 9.5t5 14.5v52q0 11-8.5 19.5T536-376H411Zm13-118h112v-62H424v62Zm0 90h112v-62H424v62Zm-272 28q-6 0-10-4t-4-10v-166q0-11 8.5-19.5T166-584h112q11 0 19.5 8.5T306-556v167q0 5-4 9t-10 4q-6 0-10-4t-4-10v-56H166v57q0 5-4 9t-10 4Zm14-98h112v-82H166v82Zm516 98q-11 0-19.5-8.5T654-404v-152q0-11 8.5-19.5T682-584h112q11 0 19.5 8.5T822-556v37q0 5-4 9t-10 4q-6 0-10-4t-4-10v-36H682v152h112v-36q0-6 4-10t10-4q6 0 10 4t4 10v36q0 11-8.5 19.5T794-376H682Z"/>
    </Icon>
  );
});

IconMaterialAbcW100Filled.displayName = 'OnesyIconMaterialAbcW100Filled';

export default IconMaterialAbcW100Filled;
