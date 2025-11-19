import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeStorage = (props: IIcon) => {

  return (
    <Icon
      name='HomeStorage'

      short_name='HomeStorage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m200-120-80-480h720l-80 480H200Zm67-80h426l51-320H216l51 320Zm93-160h240v-80H360v80ZM200-640v-80h560v80H200Zm80-120v-80h400v80H280Zm-13 560h426-426Z"/>
    </Icon>
  );
};

IconMaterialHomeStorage.displayName = 'OnesyIconMaterialHomeStorage';

export default IconMaterialHomeStorage;
