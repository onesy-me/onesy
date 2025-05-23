import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTypeSpecimen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TypeSpecimen'

      short_name='TypeSpecimen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M488-472h146l25 73q3 8 10.5 13.5T686-380q15 0 23.5-12.5T713-419L599-721q-3-9-11-14t-17-5h-22q-9 0-17 5t-11 14L407-420q-5 14 3.5 27t24.5 13q10 0 17.5-5.5T463-400l25-72Zm18-52 52-150h4l52 150H506ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm160-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialTypeSpecimen.displayName = 'OnesyIconMaterialTypeSpecimen';

export default IconMaterialTypeSpecimen;
