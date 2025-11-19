import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeepW100 = (props: IIcon) => {

  return (
    <Icon
      name='KeepW100'

      short_name='Keep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m588-458 58 58v28H494v188l-14 14-14-14v-188H314v-28l58-58v-302h-40v-28h296v28h-40v302Zm-234 58h252l-46-46v-314H400v314l-46 46Zm126 0Z"/>
    </Icon>
  );
};

IconMaterialKeepW100.displayName = 'OnesyIconMaterialKeepW100';

export default IconMaterialKeepW100;
