import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDelete = (props: IIcon) => {

  return (
    <Icon
      name='Delete'

      short_name='Delete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-600h-40v-80h200v-40h240v40h200v80h-40v600H200Zm80-80h400v-520H280v520Zm80-80h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
    </Icon>
  );
};

IconMaterialDelete.displayName = 'OnesyIconMaterialDelete';

export default IconMaterialDelete;
