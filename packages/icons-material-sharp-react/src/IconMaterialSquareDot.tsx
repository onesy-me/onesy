import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSquareDot = (props: IIcon) => {

  return (
    <Icon
      name='SquareDot'

      short_name='SquareDot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm280-80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280Z"/>
    </Icon>
  );
};

IconMaterialSquareDot.displayName = 'OnesyIconMaterialSquareDot';

export default IconMaterialSquareDot;
