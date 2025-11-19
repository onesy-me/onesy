import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeStorageFilled = (props: IIcon) => {

  return (
    <Icon
      name='HomeStorageFilled'

      short_name='HomeStorage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m200-120-80-480h720l-80 480H200Zm160-240h240v-80H360v80ZM200-640v-80h560v80H200Zm80-120v-80h400v80H280Z"/>
    </Icon>
  );
};

IconMaterialHomeStorageFilled.displayName = 'OnesyIconMaterialHomeStorageFilled';

export default IconMaterialHomeStorageFilled;
