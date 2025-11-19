import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkLocked = (props: IIcon) => {

  return (
    <Icon
      name='NetworkLocked'

      short_name='NetworkLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 800-800v400h-80v-206L273-160h327v80H80Zm600 0v-200h40v-40q0-33 23.5-56.5T800-400q33 0 56.5 23.5T880-320v40h40v200H680Zm80-200h80v-40q0-17-11.5-28.5T800-360q-17 0-28.5 11.5T760-320v40ZM273-160l527-526Q681-567 536.5-423T273-160Z"/>
    </Icon>
  );
};

IconMaterialNetworkLocked.displayName = 'OnesyIconMaterialNetworkLocked';

export default IconMaterialNetworkLocked;
