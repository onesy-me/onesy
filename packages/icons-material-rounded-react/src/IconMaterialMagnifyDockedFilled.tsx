import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnifyDockedFilled = (props: IIcon) => {

  return (
    <Icon
      name='MagnifyDockedFilled'

      short_name='MagnifyDocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-160h640v-400H160v400Zm400-160v40q0 17 11.5 28.5T600-400q17 0 28.5-11.5T640-440v-40h40q17 0 28.5-11.5T720-520q0-17-11.5-28.5T680-560h-40v-40q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600v40h-40q-17 0-28.5 11.5T480-520q0 17 11.5 28.5T520-480h40Z"/>
    </Icon>
  );
};

IconMaterialMagnifyDockedFilled.displayName = 'OnesyIconMaterialMagnifyDockedFilled';

export default IconMaterialMagnifyDockedFilled;
