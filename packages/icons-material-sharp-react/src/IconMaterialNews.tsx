import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNews = (props: IIcon) => {

  return (
    <Icon
      name='News'

      short_name='News'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h520l200 200v520H120Zm80-80h560v-400H600v-160H200v560Zm80-80h400v-80H280v80Zm0-320h200v-80H280v80Zm0 160h400v-80H280v80Zm-80-320v160-160 560-560Z"/>
    </Icon>
  );
};

IconMaterialNews.displayName = 'OnesyIconMaterialNews';

export default IconMaterialNews;
