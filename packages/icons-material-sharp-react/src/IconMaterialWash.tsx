import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWash = (props: IIcon) => {

  return (
    <Icon
      name='Wash'

      short_name='Wash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-640q-39 0-69.5-30.5T600-740q0-35 23-77.5T700-920q54 60 77 102.5t23 77.5q0 39-30.5 69.5T700-640Zm60 560H80v-441l385-250 65 65-78 126h348v80H308l77-124-225 146v318h600v80ZM480-360v-80h400v80H480Zm0 140v-80h360v80H480ZM320-342Z"/>
    </Icon>
  );
};

IconMaterialWash.displayName = 'OnesyIconMaterialWash';

export default IconMaterialWash;
