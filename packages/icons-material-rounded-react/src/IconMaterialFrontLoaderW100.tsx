import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrontLoaderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontLoaderW100'

      short_name='FrontLoader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-196q-39 0-66.5-27.5T91-290v-208q0-25 17.5-42.5T151-558h211v-169q0-13 8.5-21.5T392-757h121q39 0 66.5 27.5T607-663v169h56v-56q0-11 4-21t12-18l22-22q11-11 26-9t22 16l101 190q8 15-1 29.5T823-370H717q-22 0-38-15.5T663-424v-42h-56v95q22 13 34.5 34t12.5 47q0 39-27.5 66.5T560-196q-35 0-61.5-22T467-275H278q-5 35-31.5 57T185-196Zm0-28q27 0 46.5-19.5T251-290q0-27-19.5-46.5T185-356q-27 0-46.5 19.5T119-290q0 27 19.5 46.5T185-224Zm375 0q27 0 46.5-19.5T626-290q0-27-19.5-46.5T560-356q-27 0-46.5 19.5T494-290q0 27 19.5 46.5T560-224Zm-198-80v-226H151q-14 0-23 9t-9 23v142q13-14 30-21t36-7q35 0 61 22.5t31 57.5h85Zm28 0h77q5-35 31.5-57.5T560-384q5 0 9.5.5t9.5 1.5v-84H390v162Zm437-94L723-594l-24 25q-4 4-6 9t-2 10v152h136Zm-437-96h189v-169q0-27-19.5-46.5T513-729H390v235Zm-28 190v-80 28-174 226Zm28 0v-162 84-2 80Z"/>
    </Icon>
  );
});

IconMaterialFrontLoaderW100.displayName = 'OnesyIconMaterialFrontLoaderW100';

export default IconMaterialFrontLoaderW100;
