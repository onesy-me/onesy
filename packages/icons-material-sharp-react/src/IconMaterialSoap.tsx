import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSoap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Soap'

      short_name='Soap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M630-640q-29 0-49.5-20.5T560-710q0-29 20.5-49.5T630-780q29 0 49.5 20.5T700-710q0 29-20.5 49.5T630-640Zm210 0q-33 0-56.5-23.5T760-720q0-33 23.5-56.5T840-800q33 0 56.5 23.5T920-720q0 33-23.5 56.5T840-640ZM700-800q-25 0-42.5-17.5T640-860q0-25 17.5-42.5T700-920q25 0 42.5 17.5T760-860q0 25-17.5 42.5T700-800Zm60 720H80v-441l385-250 65 65-78 126h348v80H308l77-124-225 146v318h600v80ZM480-360v-80h400v80H480Zm0 140v-80h360v80H480ZM320-342Z"/>
    </Icon>
  );
});

IconMaterialSoap.displayName = 'OnesyIconMaterialSoap';

export default IconMaterialSoap;
