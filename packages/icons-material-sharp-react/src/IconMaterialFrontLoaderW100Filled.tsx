import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrontLoaderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontLoaderW100Filled'

      short_name='FrontLoader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-196q-39 0-66.5-27.5T91-290v-268h271v-199h151l94 94v169h56v-79l67-67 143 270H663v-96h-56v95q22 13 34.5 34t12.5 47q0 39-27.5 66.5T560-196q-35 0-61.5-22T467-275H278q-5 35-31.5 57T185-196Zm0-28q27 0 46.5-19.5T251-290q0-27-19.5-46.5T185-356q-27 0-46.5 19.5T119-290q0 27 19.5 46.5T185-224Zm375 0q27 0 46.5-19.5T626-290q0-27-19.5-46.5T560-356q-27 0-46.5 19.5T494-290q0 27 19.5 46.5T560-224Zm267-174L723-594l-32 34v162h136Zm-437-96h189v-157l-78-78H390v235Z"/>
    </Icon>
  );
});

IconMaterialFrontLoaderW100Filled.displayName = 'OnesyIconMaterialFrontLoaderW100Filled';

export default IconMaterialFrontLoaderW100Filled;
