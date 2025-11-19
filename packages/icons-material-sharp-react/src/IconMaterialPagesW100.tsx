import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPagesW100 = (props: IIcon) => {

  return (
    <Icon
      name='PagesW100'

      short_name='Pages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0-560v560-560Zm186 414 94-57 94 57-25-107 83-71-109-10-43-100-43 100-109 10 83 71-25 107Z"/>
    </Icon>
  );
};

IconMaterialPagesW100.displayName = 'OnesyIconMaterialPagesW100';

export default IconMaterialPagesW100;
